<template>
  <swiper
    id="home"
    class="swiper"
    :options="{
      speed: 1000,
      autoplay: true,
      loop: true,
      delay: 3000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }"
  >
    <swiper-slide>
      <div class="bg bg1">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="tit">海外数字化营销一站式服务商</div>
              <div class="txt">
                <span>用数字化营销高效链接</span>
                <span>中国企业与全球消费者</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg bg2">
        <div class="container">
          <div class="row">
            <div class="col-12 right">
              <div>
                <div class="title">技术+服务扩展营销边界</div>
                <div class="txt">
                  深度赋能出海需求，海外主流媒体和本土化优质资源全覆盖
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg bg3">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="title">链接全球网络红人</div>
              <div class="txt">
                <span>助力中国企业出海</span>
                <span>出海内容营销新势力</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div
      class="swiper-button-prev swiper-button-white"
      slot="button-prev"
    ></div>
    <div
      class="swiper-button-next swiper-button-white"
      slot="button-next"
    ></div>
  </swiper>
</template>

<style lang="less" scoped>
.swiper {
  height: 100%;

  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      display: block;
    }
  }

  /deep/.swiper-wrapper {
    transition-timing-function: ease;

    .swiper-slide-active {
      .bg {
        .title,
        .tit,
        .txt {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    }
  }

  /deep/.swiper-pagination {
    transition: all 0.4s;

    .swiper-pagination-bullet {
      .size(10px, 10px);
      background: rgba(232, 243, 255, 1);
      transition: all 0.4s;
    }

    .swiper-pagination-bullet-active {
      width: 30px;
      background: rgba(0, 134, 255, 1);
      border-radius: 35px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    opacity: 0.5;
    transition: all 0.4s;

    &:hover {
      opacity: 1;
    }
  }

  .swiper-button-prev {
    left: 20px;
  }

  .swiper-button-next {
    right: 20px;
  }
}

.bg {
  height: 100%;
  color: #ffffff;
  background: transparent;
  .fa(center);

  .title {
    font-size: 72px;
    line-height: 108px;
    font-family: Alibaba PuHuiTi-Bold, Alibaba PuHuiTi;
    font-weight: bold;
    opacity: 0;
    transition: all 1.8s;
  }

  .tit {
    opacity: 0;
    transition: all 1.8s;
  }

  .txt {
    margin-top: 8px;
    font-size: 24px;
    line-height: 36px;
    font-family: Alibaba PuHuiTi-Regular, Alibaba PuHuiTi;
    font-weight: 400;
    opacity: 0;
    transition: all 1.8s;

    span + span {
      margin-left: 16px;
    }
  }
}

.bg1 {
  text-align: center;
  background-image: url("~@assets/banner1.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .title {
    font-size: 80px;
    line-height: 120px;
    font-family: Alibaba PuHuiTi-Bold, Alibaba PuHuiTi;
    font-weight: bold;
    transform: translateY(300px);
  }

  .tit {
    font-size: 64px;
    line-height: 96px;
    font-family: Alibaba PuHuiTi-Bold, Alibaba PuHuiTi;
    font-weight: bold;
    transform: translateY(300px);
  }

  .txt {
    margin-top: 16px;
    transform: translateY(300px);
  }
}

.bg2 {
  text-align: center;
  background-image: url("~@assets/banner2.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .right {
    .fj(flex-end);

    .txt {
      text-align: left;
    }
  }

  .title,
  .txt {
    transform: translateX(-300px);
  }
}

.bg3 {
  background-image: url("~@assets/banner3.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .title,
  .txt {
    transform: translateX(300px);
  }
}

@media (max-width: 576px) {
  .swiper {
    height: 19.52rem;

    /deep/.swiper-pagination {
      .swiper-pagination-bullet {
        .size(0.4rem, 0.4rem);
      }

      .swiper-pagination-bullet-active {
        width: 1.2rem;
        border-radius: 1.4rem;
      }
    }

    .swiper-button-prev {
      left: 0.6rem;
    }

    .swiper-button-next {
      right: 0.6rem;
    }
  }

  .bg {
    .title {
      font-size: 1.28rem;
      line-height: 2.72rem;
    }

    .txt {
      margin-top: 0.32rem;
      font-size: 0.64rem;
      line-height: 1.04rem;

      span + span {
        margin-left: 0.4rem;
      }
    }
  }

  .bg1 {
    .title {
      font-size: 1.6rem;
      line-height: 3.2rem;
    }

    .tit {
      font-size: 0.8rem;
      line-height: 1.84rem;
    }

    .txt {
      margin-top: 0.4rem;
    }
  }
}
</style>
