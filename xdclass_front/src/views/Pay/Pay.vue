<template>
  <div>
    <!--视频信息-->
    <div class="info">
      <p class="info_title">商品信息</p>
      <div class="box">
        <div class="imgdiv">
          <img alt="课程照⽚片" :src="videoDetail.cover_img" />
        </div>
        <div class="textdiv">
          <p class="c_title">{{ videoDetail.title }}</p>
          <p class="price">
            ￥:&nbsp;&nbsp; {{ (videoDetail.price / 100).toFixed(2) }}
          </p>
        </div>
      </div>
    </div>
    <!--顶部⽀支付-->
    <div class="footer">
      <p class="money">
        实付:&nbsp;&nbsp; {{ (videoDetail.price / 100).toFixed(2) }}
      </p>
      <p class="submit" @click="pay">立即购买</p>
    </div>
  </div>
</template>
<script>
import { getVideoDetail, saveOrder } from "@/api/getData.js";
export default {
  data() {
    return {
      videoDetail: {},
    };
  },
  methods: {
    async getVideoDetailInfo() {
      try {
        const result = await getVideoDetail(this.$route.query.video_id);
        if (result.data.code == 0) {
          this.videoDetail = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async pay() {
      try {
        const result = await saveOrder(
          this.$store.state.token,
          this.$route.query.video_id
        );
        if (result.data.code == 0) {
          const toast = this.$createToast({
            time: 1500,
            txt: "下单成功",
            type: "correct",
            onTimeout: () => { //onTimeout 定时器器属性，内置变量
              this.$router.push("/order");
            },
          });
          toast.show();
        } else {
          const toast = this.$createToast({
            time: 1500,
            txt: "下单失败，请核实订单是否存在",
            type: "error",
          });
          toast.show();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    if (this.$route.query.video_id) {
      this.getVideoDetailInfo();
    }
  },
};
</script>

<style lang="scss" scoped>
// 视频标题
.info_title {
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #d9dde1;
}
.box {
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  margin-bottom: 15px;
  .imgdiv {
    width: 105px;
    height: 59px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .textdiv {
    margin-left: 20px;
    height: 59px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .price {
      flex-shrink: 0;
    }
  }
}
//底部
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
  font-size: 16px;
  .money {
    height: 50px;
    line-height: 50px;
    flex: 2;
    text-align: center;
    background-color: #fff;
  }
  .submit {
    height: 50px;
    line-height: 50px;
    flex: 1;
    text-align: center;
    background-color: #ff2d50;
    color: #fff;
  }
}
</style>