<template>
  <div>
    <!-- 顶部返回组件 -->
    <detail-header :videoInfo="videoInfo"></detail-header>
    <!-- 课程介绍组件 -->
    <detail-course :videoInfo="videoInfo"></detail-course>
    <!-- 课程tab简介组件 -->
    <detail-tab :videoInfo="videoInfo" :chapterList="chapterList"></detail-tab>
    <!-- 底部立即购买组件 -->
    <footer>
      <router-link :to="{path:'/pay',query:{video_id:this.$route.query.video_id}}" class="user_buy">
        <button>立刻购买</button>
      </router-link>
      
    </footer>

  </div>
</template>

<script>
import DetailHeader from "./Components/Header";
import DetailCourse from "./Components/Course.vue";
import DetailTab from "./Components/Tab.vue";
import { getVideoDetail } from "@/api/getData.js";

export default {
  components: {
    //注册组件
    DetailHeader,
    DetailCourse,
    DetailTab,
  },
  //  定义数据源
  data() {
    return {
      videoInfo: {},
      chapterList: [],
    };
  },
  //方法
  methods: {
    async getDetailVideoData(vid) {
      try {
        const result = await getVideoDetail(vid);
        console.log("视频标题：" + result.data.data.title);
        if (result.data.code == 0) {
          this.videoInfo = result.data.data;
          this.chapterList = result.data.data.chapter_list;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  //vue生命周期
  mounted() {
    console.log("视频ID:" + this.$route.query.video_id);
    this.getDetailVideoData(this.$route.query.video_id);
  },
};
</script>

<style lang="scss" scoped>
//底部
footer {
// fixed固定在底部
position: fixed;
bottom: 0;
width: 100%;
padding: 8px 0;
background-color: #fff;
z-index: 999;
box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.05);
}
//设置购买按钮样式
button {
display: block;
color: #fff;
margin: 0 auto;
background-color: #d93f30;
height: 34px;
line-height: 34px;
border-radius: 17px;
width: 80%;
border: none;
font-size: 15px;
text-align: center;
}
</style>