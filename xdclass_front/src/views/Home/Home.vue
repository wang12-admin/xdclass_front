<template>
  <div>
    <!-- 首页轮播图 -->
    <home-banner :Banners="Banners"></home-banner>
    <!-- 首页视频列表 -->
    <video-list :videoList="videoList"></video-list>
    <!-- 首页公用模板 -->
    <common-footer></common-footer>
  </div>
</template>

<script>
// 引入组件
import HomeBanner from "./Component/Banner";
import VideoList from "./Component/VideoList";
import CommonFooter from "@/components/CommonFooter";
import { getBanner, getVideoList } from "@/api/getData.js";

export default {
  // 注册组件
  components: {
    HomeBanner,
    VideoList,
    CommonFooter,
  },
  //声明一个数据源
  data() {
    return {
      Banners: [],
      videoList: []
    }
  },
  //定义方法
  methods: {
    async getBannerData() {
      try {
        const result = await getBanner();
        if (result.data.code == 0) {
          console.log(result);
          this.Banners = result.data.data;
        }
      } catch (error) {
        console.lo(error);
      }
    },
    async getVideoListData() {
      try {
        const result = await getVideoList();
        if (result.data.code == 0) {
          this.videoList = result.data.data;
        }
      } catch (error) {
        console.lo(error);
      }
    }
  },
  mounted() {
    this.getBannerData();
    this.getVideoListData();
  },
};
</script>

<style lang="scss" scoped>
</style>
