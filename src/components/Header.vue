<template>
  <div class="main">
    <div class="head">
      <div class="container">
        <div class="top">
          <ul class="menu">
            <div class="logo"><img src="@assets/logo.png" alt=""></div>
            <li><a href="#prize" class="scroll-link" data-id="prize">{{  $t("title1")  }}</a></li>
            <li><a href="#about" class="scroll-link" data-id="about">{{  $t("title2")  }}</a></li>
          </ul>
          <div class="download"><a href="https://play.google.com/store/apps/details?id=com.playworld.boxgo.boxgo">{{  $t("download")  }}</a></div>
        </div>
      </div>
    </div>
    <div class="box" id="box">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7 left">
            <div class="title">{{  $t("boxgo")  }}</div>
            <div class="tit">{{  $t("tit1")  }}</div>
            <div class="txt">
              <div class="p1">{{  $t("txt1")  }}</div>
              <div class="p2">{{  $t("txt2")  }}</div>
              <div class="p3">{{  $t("txt3")  }}</div>
              <div class="p4">{{  $t("txt4")  }}</div>
            </div>
            <div class="download"><a href="https://play.google.com/store/apps/details?id=com.playworld.boxgo.boxgo">{{  $t("download")  }}</a></div>
          </div>
          <div class="col-12 col-md-5 right">
            <div class="image"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      nav: false
    }
  },
  mounted() {
    const self = this;
    $(".scroll-link").on("click", function (event) {
      event.preventDefault();
      const sectionID = $(this).attr("data-id");
      self.scrollToID("#" + sectionID, 100);
    });
    $(document).scroll(() => {
      const scrollTop = $(document).scrollTop();
      if (scrollTop > 70) {
        this.show = true;
      } else {
        this.show = false;
      }
      const collapses = $(".scroll-link");
      for (let i = 0; i < collapses.length; i++) {
        const id = $(collapses[i]).attr("data-id");
        if (scrollTop >= $("#" + id).offset().top) {
          for (let j = 0; j < collapses.length; j++) {
            $(collapses[j]).parent().removeClass();
          }
          // $(collapses[i]).parent().addClass("active");
        }
      }
    });
    $(document).click(() => {
      this.nav = false;
    });
  },
  methods: {
    // ???????????????????????????
    scrollToID(id, speed) {
      $("html,body").animate(
        {
          scrollTop: $(id).offset().top,
        },
        speed
      );
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 1046px;
  background-image: url("~@assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  .head {
    background: transparent;

    .top {
      .flex(space-between, center);

      .menu {
        height: 104px;
        .fa(center);

        .logo {
          >img {
            width: 56px;
            height: 56px;
          }

          margin-right: 40px;
        }

        >li {
          width: 214px;
          text-align: center;

          a {
            font-weight: 700;
            font-size: 20px;
            line-height: 28px;
            text-transform: capitalize;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;

            &:hover {
              color: #FFFFFF;
            }
          }
        }
      }

      .download {
        >a {
          display: block;
          cursor: pointer;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #FFFFFF;
          padding: 8px 16px;
          border: 1px solid #FFFFFF;
          border-radius: 65px;

          &:hover {
            color: #FF470E;
            background-color: #FFFFFF;
            transition: all 0.4s;
          }
        }
      }
    }
  }

  .box {
    font-weight: 700;
    color: #FFFFFF;
    margin-top: 80px;

    .left {
      .fj(center);
      flex-direction: column;

      .title {
        font-size: 48px;
        line-height: 56px;
        animation: leftShow1 2.4s;
      }

      .tit {
        margin-top: 16px;
        font-size: 56px;
        line-height: 64px;
        animation: leftShow2 2.4s;
      }

      .txt {
        margin: 40px 0;

        >div {
          font-size: 20px;
          line-height: 28px;
        }
      }

      .download {
        animation: leftShow7 2.6s;

        >a {
          font-size: 16px;
          line-height: 24px;
          color: #FF470E;
          padding: 8px 16px;
          background-color: #FFFFFF;
          border-radius: 65px;

          &:hover {
            transform: translateY(10px);
            transition: all 0.4s;
          }
        }
      }

      .p1 {
        animation: leftShow3 2.3s;
      }

      .p2 {
        animation: leftShow4 2.3s;
      }

      .p3 {
        animation: leftShow5 2.4s;
      }

      .p4 {
        animation: leftShow6 2.4s;
      }
    }


    .right {
      animation: rightShow 2s;

      .image {
        width: 100%;
        height: 576px;
        background-image: url("~@assets/banner.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;

      }
    }

    @keyframes leftShow1 {
      0% {
        transform: translateX(-140px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes leftShow2 {
      0% {
        transform: translateX(-160px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes leftShow3 {
      0% {
        transform: translateX(-180px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes leftShow4 {
      0% {
        transform: translateX(-210px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes leftShow5 {
      0% {
        transform: translateX(-240px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes leftShow6 {
      0% {
        transform: translateX(-280px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes leftShow7 {
      0% {
        transform: translateX(-300px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes rightShow {
      0% {
        transform: translateX(200px);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
}

@media (max-width:992px) {
  .main {
    height: 800px;

    .head {

      .top {

        .menu {
          height: 72px;

          .logo {
            >img {
              width: 36px;
              height: 36px;
            }

            margin-right: 20px;
          }

          >li {
            width: 180px;

            a {
              font-size: 16px;
              line-height: 54px;
            }
          }
        }

        .download {
          font-size: 14px;
        }
      }
    }

    .box {
      font-weight: 700;
      color: #FFFFFF;
      margin-top: 40px;

      .left {
        .title {
          font-size: 36px;
          line-height: 48px;
        }

        .tit {
          margin-top: 12px;
          font-size: 42px;
          line-height: 54px;
        }

        .txt {
          margin: 20px 0;

          >div {
            font-size: 16px;
            line-height: 24px;
          }
        }

        .download {
          >a {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
}

@media (max-width:576px) {
  .main {
    height: 28.8rem;

    .head {
      .top {
        .menu {
          height: 2.88rem;

          .logo {
            >img {
              width: 1.52rem;
              height: 1.6rem;
            }
          }

          >li {
            display: none;
          }
        }

        .download {
          font-size: .48rem;
          line-height: .8rem;
          padding: .24rem .48rem;
        }
      }
    }

    .box {
      margin-top: 1.28rem;

      .left {
        .title {
          font-size: .96rem;
          line-height: 1.28rem;
        }

        .tit {
          margin-top: .32rem;
          font-size: .96rem;
          line-height: 1.28rem;
        }

        .txt {
          margin: .64rem 0;

          >div {
            font-size: .56rem;
            line-height: .88rem;
          }
        }

        .download {
          >a {
            font-size: .48rem;
            line-height: .8rem;
          }

        }

      }

      .right {
        .fj(center);
        margin-top: .64rem;

        .image {
          width: 12.64rem;
          height: 12.64rem;
          background-position: top;
        }
      }

    }
  }
}
</style>
