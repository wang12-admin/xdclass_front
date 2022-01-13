<template>
  <div>
    <cube-tab-bar v-model="selectedLabelSlots" show-slider >
      <cube-tab
        v-for="item in tabs"
        :label="item.label"
        :icon="item.icon"
        :key="item.label"
      >
      </cube-tab>
    </cube-tab-bar>
    <!-- 补充知识点 动态组件 & 异步组件,如果不写就不会显示对应的组件数据啦-->
    <component :videoInfo="videoInfo" :chapterList="chapterList" v-bind:is="selectedLabelSlots==='简介'?'Summary':'CataLog'"></component>
  </div>
</template>

<script>
import CataLog from "./CataLog";
import Summary from "./Summary";

export default {
  //注册组件
  components: {
    CataLog,
    Summary,
  },
  //引用数据
  props: {
    videoInfo: {
      type: Object,
      required: true,
    },
    chapterList: {
      type: Array,
      required: true,
    },
  },
  //   声明数据源
  data() {
    return {
      selectedLabelSlots: "简介",
      tabs: [
        {
          label: "简介",
          icon: "cubeic-home",
        },
        {
          label: "目录",
          icon: "cubeic-like",
        },
      ],
    };
  },
};
</script>
