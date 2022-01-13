<template>
  <div>
   <div><img class="summary" :src="videoInfo.summary" alt="视频简介"></div>
  </div>
</template>

<script>
export default {
  props: {
    videoInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.summary {
  width: 100%;
  padding-bottom: 50px;
  margin: 15px 0;
}
</style>