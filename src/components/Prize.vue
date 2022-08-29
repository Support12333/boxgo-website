<template>
  <div class="prize" id="prize">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title">Prize display</div>
          <div class="txt">100% winning, massive prizes are waiting for you</div>
          <swiper :options="options">
            <swiper-slide v-for="(item, index) in list" :key="index" class="slide"><img :src="item" alt="">
            </swiper-slide>
          </swiper>
          <div class="btns"><a href="">open the box now</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        require("@assets/p1.png"),
        require("@assets/p2.png"),
        require("@assets/p3.png"),
        require("@assets/p4.png"),
        require("@assets/p5.png")
      ],
      options: {
        // speed: 1000,
        // autoplay: true,
        loop: true,
        // delay: 3000,
        slidesPerView: 5,
        // loopedSlides: 5,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
          1323: {
            slidesPerView: 5,
            spaceBetween: 70,
          }
        },
      }
    }
  },
};
</script>
<style lang="less" scoped>
.prize {
  .title {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #131414;
    text-align: center;
    margin-top: 80px;
  }

  .txt {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #131414;
    text-align: center;
    margin-bottom: 80px;
    margin-top: 8px;
  }

  .slide {
    >img {
      width: 238px;
      height: 516px;
    }
  }

  .btns {
    text-align: center;
    width: 100%;
    margin: 40px 0;

    >a {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      text-transform: capitalize;
      color: #FFFFFF;
      padding: 8px 16px;
      background-color: #FF470E;
      border-radius: 65px;
    }
  }

}
</style>
