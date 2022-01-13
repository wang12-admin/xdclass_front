<template>
  <cube-slide ref="slide" :data="Banners">
    <cube-slide-item
      v-for="(item, index) in Banners"
      :key="index"
    >
      <a :href="item.url">
        <img :src="item.img" style="width:100%"/>
      </a>
    </cube-slide-item>
  </cube-slide>
</template>
<script>
export default {
  //声明父模块属性的类型
  props: {
    Banners: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>