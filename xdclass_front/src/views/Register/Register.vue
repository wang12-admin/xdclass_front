<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item :field="fields[1]"></cube-form-item>
        <cube-form-item :field="fields[2]"></cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">注册</cube-button>
      </cube-form-group>
    </cube-form>
    <router-link to="/login" class="reg">登录</router-link>
  </div>
</template>

<script>
import { registerApi } from "@/api/getData.js";
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
          modelKey: "useranameValue",
          label: "用户名",
          props: {
            placeholder: "请输入用户名",
          },
          rules: {
            required: true,
          },
          messages: {
            required: "用户名不能为空",
          },
        },
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
        const result = await registerApi(
          model.useranameValue,
          model.phoneValue,
          model.pwdValue
        );
        if (result.data.code == 0) {
          const toast = this.$createToast({
            time: 1500,
            txt: "注册成功",
            type: "correct",
          });
          toast.show();
        } else {
          const toast = this.$createToast({
            time: 1500,
            txt: "注册失败:手机号已经存在",
            type: "correct",
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