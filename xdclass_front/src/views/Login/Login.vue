<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item :field="fields[1]"></cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">登录</cube-button>
      </cube-form-group>
    </cube-form>
    <router-link to="/register" class="reg">注册</router-link>
  </div>
</template>

<script>
import { logiApi } from "@/api/getData.js";
export default {
  data() {
    return {
      model: {
        useranameValue: "",
        phoneValue: "",
        pwdValue: "",
      },
      fields: [
        {
          type: "input",
          modelKey: "phoneValue",
          label: "手机号",
          rules: {
            required: true,
          },
          messages: {
            required: "手机号不能为空",
          },
          props: {
            placeholder: "请输入手机号",
          },
        },
        {
          type: "input",
          modelKey: "pwdValue",
          label: "密码",
          rules: {
            required: true,
          },
          messages: {
            required: "密码不能空",
          },
          props: {
            placeholder: "请输入密码",
            eys: {
              open: false,
            },
            type: "password",
          },
        },
      ],
    };
  },
  methods: {
    async submitHandler(e, model) {
      e.preventDefault();
      try {
        const result = await logiApi(
          model.phoneValue,
          model.pwdValue
        );
        if (result.data.code == 0) {
            //存入token
            localStorage.setItem('token',result.data.data)
            //存入vuex中
            this.$store.dispatch('asyncSetToken', result.data.data);
          this.$router.push("/")
        } else {
          const toast = this.$createToast({
            time: 1500,
            txt: "登录失败,请检查信息是否正确",
            type: "error",
          });
          toast.show();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 50px 5% 0;
  text-align: center;
}
//注册
.cube-btn {
  margin-top: 20px;
}
// 登录
.reg {
  display: inline-block;
  margin-top: 30px;
  font-size: 18px;
}
</style>