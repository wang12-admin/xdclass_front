<template>
  <div class="container">
    <div class="p_top">
      <div>
        <img :src="userInfo.head_img || defaultHeaderImg" alt="头像" />
        <router-link to="/login" v-if="getToken === ''"
          ><p>立即登录</p></router-link
        >
        <p>{{ userInfo.name }}</p>
      </div>
      <button v-if="getToken !== ''" class="green" @click="signOut">
        退出登录
      </button>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from "@/components/CommonFooter";
import headerImg from "@/assets/logo.png";
import { getUserInfo } from "@/api/getData.js";

export default {
  components: {
    CommonFooter,
    headerImg,
  },
  data() {
    return {
      userInfo: {},
      defaultHeaderImg: headerImg,
    };
  },
  computed: {
    getToken() {
      return this.$store.state.token;
    },
  },
  methods: {
    //   获取用户信息
    async getUserdata() {
      try {
        const result = await getUserInfo(this.getToken);
        if (result.data.code== 0) {
          this.userInfo = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    //退出用户,也就是清除token
    async signOut() {
      try {
        await this.$store.dispatch("clearToken");
        localStorage.removeItem("token");
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
  //   vue声明周期
  mounted() {
    if (this.getToken) {
      this.getUserdata();
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  // 顶部头像区域
  .p_top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background-color: #2c3f54;
    div {
      text-align: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50px;
      }
      p {
        font-size: 16px;
        color: #fff;
        margin-top: 10px;
      }
    }
  }
}
// 退出登录
.green {
  display: block;
  background-color: #3bb149;
  border: none;
  outline: none;
  width: 80%;
  height: 40px;
  margin: 20px auto 0;
  color: #fff;
  border-radius: 20px;
}
</style>