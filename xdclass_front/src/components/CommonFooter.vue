<template>
  <div class="tab">
    <cube-tab-bar v-model="selectedLabelSlots" @click="changHandler">
      <cube-tab
        v-for="item in tabs"
        :icon="item.icon"
        :label="item.label"
        :key="item.path"
        :value="item.path"
      >
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelSlots: "/",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home",
          path: "/",
        },
        {
          label: "我的订单",
          icon: "cubeic-like",
          path: "/order",
        },
        {
          label: "个人中心",
          icon: "cubeic-person",
          path: "/personal"
        },
      ],
    };
  },
  methods: {
    changHandler(path) {
      // 这个⽅方法会向 history栈添加⼀一个新的记录，后退按钮时，则回到之前的 URL
      if (path !== this.$route.path) {
        this.$router.push(path);
      }
    },
    created() {
      //   默认路由选择器，比如刷新路由时会重新进入到当前路由
      this.selectedLabelSlots = this.$route.path;
    },
  },
};
</script>

<!--SCSS是?一种CSS预处理理语?言, scoped 是指这个scss样式 只作?用于当前组件-->
<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
}
.cube-tab_active {
  color: #3bb149;
}
</style>
