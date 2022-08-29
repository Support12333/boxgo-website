<template>
  <div class="main">
    <div class="head">
      <div class="container">
        <div class="top">
          <ul class="menu">
            <div class="logo"><img src="@assets/logo.png" alt=""></div>
            <li><a href="#prize" class="scroll-link" data-id="prize">Prize display</a></li>
            <li><a href="#about" class="scroll-link" data-id="about">About box go</a></li>
          </ul>
          <div class="download">Download APP</div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7 left">
            <div class="title">Box Go</div>
            <div class="tit">This Box is Awesome</div>
            <div class="txt">
              <div>1, Unboxing online, lots of surprises</div>
              <div>2. Directly recycle items you don't like</div>
              <div>3. Authentic trendy goods, fun game play</div>
              <div>4. Buff blessing, good luck upgrade</div>
            </div>
            <div class="download"><a href="">Download APP</a></div>
          </div>
          <div class="col-12 col-lg-5">
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
    // 点击滚动到指定位置
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
    // position: sticky;
    // top: 0;
    // left: 0;
    // right: 0;
    z-index: 99;
    background: transparent;
    transition: all 0.4s;

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

          a {
            font-weight: 700;
            font-size: 20px;
            line-height: 28px;
            text-transform: capitalize;
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;

            &:hover {
              color: #FFFFFF;
            }
          }
        }
      }

      .download {
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        padding: 8px 16px;
        border: 1px solid #FFFFFF;
        border-radius: 65px;
      }
    }
  }

  .white {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);

    .top {
      .menu {
        >li {
          >a {
            color: rgba(51, 51, 51, 0.6);
          }

          &:hover>a {
            color: rgba(51, 51, 51, 1);
          }
        }
      }

      .download {
        color: rgba(51, 51, 51, 0.6);
        border: 1px solid rgba(51, 51, 51, 0.6);
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
      }

      .tit {
        margin-top: 16px;
        font-size: 56px;
        line-height: 64px;
      }

      .txt {
        margin: 40px 0;

        >div {
          font-size: 20px;
          line-height: 28px;
        }
      }

      .download {
        >a {
          font-size: 16px;
          line-height: 24px;
          color: #FF470E;
          padding: 8px 16px;
          background-color: #FFFFFF;
          border-radius: 65px;
        }

      }

    }

    .image {
      width: 100%;
      height: 576px;
      background-image: url("~@assets/banner.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;

    }
  }
}
</style>
