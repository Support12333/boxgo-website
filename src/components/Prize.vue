<template>
  <div class="prize" id="prize">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title" id="prize1">{{ $t("title1") }}</div>
          <div class="txt"  id="prize2">{{ $t("txt5") }}</div>
          <swiper :options="options"  id="prize3">
            <swiper-slide v-for="(item, index) in list" :key="index" class="slide" :class="[isclass ? 'swiper-no-swiping' : '']">
              <img :src="item" alt="">
            </swiper-slide>
          </swiper>
          <div class="btns"  id="prize4"><a href="https://play.google.com/store/apps/details?id=com.playworld.boxgo.boxgo">{{ $t("btn1") }}</a></div>
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
        loopedSlides:5,
        breakpoints: {
          640: {
            slidesPerView: "auto",
            spaceBetween: 0,
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
      },
      isclass:false
    }
  },
  mounted() {
    if (document.documentElement.clientWidth >= 1323) {
      this.isclass= true

    }
    $(document).scroll(() => {
      for (let index = 1; index < 5; index++) {
        Restore(`#prize${index}`);
      }
    });
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

@media (max-width:992px) {
  .prize {
    .title {
      font-size: 28px;
      line-height: 44px;
      margin-top: 40px;
    }

    .txt {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 40px;
      margin-top: 6px;
    }

    .swiper-slide {
      .fa(center);
    }

    .btns {
      >a {
        font-size: 16px;
        line-height: 24px;
      }
    }

  }
}

@media (max-width:576px) {
  .prize {
    .title {
      font-size: .96rem;
      line-height: 1.28rem;
      margin-top: 1.28rem;
    }

    .txt {
      font-size: .56rem;
      line-height: .88rem;
      margin-bottom: 1.28rem;
      margin-top: .32rem;
    }

    .slide {
      >img {
        width: 9.52rem;
        height: 20.64rem;
      }
    }

    .swiper-slide {
      width: 80%;
    }

    .btns {
      margin: 1.44rem 0;

      >a {
        font-size: .64rem;
        line-height: .96rem;
        padding: .48rem .64rem;
      }
    }
  }


}
</style>
