<template>
  <div class="header" ref="header" :class="{ white: show || nav }">
    <div class="container">
      <div class="row">
        <div class="col-6 col-lg-4 logo">
          <img src="@assets/logo.png" @click="scrollToID('#home', 100)" />
        </div>
        <div class="col-6 col-lg-8 flex">
          <i
            class="iconfont icon-more toggle"
            @click.stop="nav = !nav"
            v-if="!nav"
          ></i>
          <i
            class="iconfont icon-close toggle"
            @click.stop="nav = false"
            v-else
          ></i>
          <ul class="nav" :class="{ actvie: nav }">
            <li class="active">
              <a href="#home" class="scroll-link" data-id="home">首页</a>
            </li>
            <li>
              <a href="#business" class="scroll-link" data-id="business"
                >业务</a
              >
            </li>
            <li>
              <a href="#about" class="scroll-link" data-id="about">关于我们</a>
            </li>
            <div class="line" :style="{ left: lefts[index] }"></div>
          </ul>
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
      nav: false,
      lefts: ["0px", "33.33333333%", "66.66666667%"],
      index: 0,
    };
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
          $(collapses[i]).parent().addClass("active");
          this.index = i;
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
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: @header;
  background: transparent;
  transition: all 0.4s;
  z-index: 5;

  .logo {
    height: @header;
    .fa(center);

    img {
      height: 36px;
      cursor: pointer;
    }
  }

  .flex {
    position: relative;
    .fj(flex-end);

    .toggle {
      display: none;
    }

    .nav {
      position: relative;
      max-width: 564px;
      .size(75%, @header);
      .fj(flex-end);

      > li {
        max-width: 188px;
        .size(33.333333%, 100%);
        text-align: center;
        cursor: pointer;
        transition: all 0.4s;

        &:hover > a {
          color: rgba(255, 255, 255, 1);
        }

        &.active > a {
          color: rgba(255, 255, 255, 1);
        }

        > a {
          display: inline-block;
          width: 100%;
          font-size: 16px;
          line-height: @header;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
        }
      }

      .line {
        position: absolute;
        left: 0;
        bottom: 0;
        max-width: 188px;
        width: 33.333333%;
        height: 3px;
        background: rgba(255, 255, 255, 1);
        transition: all 0.4s ease-in-out;
      }
    }
  }
}

.white {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);

  .flex {
    .nav {
      > li {
        &:hover > a {
          color: rgba(51, 51, 51, 1);
        }

        &.active > a {
          color: rgba(51, 51, 51, 1);
        }

        > a {
          color: rgba(51, 51, 51, 0.6);
        }
      }

      .line {
        background: rgba(22, 93, 255, 1);
        box-shadow: inset 0px -3px 0px 1px #165dff;
      }
    }
  }
}

@media (max-width: 576px) {
  .header {
    height: 2.4rem;

    .logo {
      height: 2.4rem;

      img {
        height: 1.44rem;
      }
    }

    .flex {
      .toggle {
        display: block;
        padding-left: 0.6rem;
        font-size: 0.96rem;
        line-height: 2.4rem;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
      }

      .nav {
        position: fixed;
        top: 2.4rem;
        right: -100vw;
        padding: 0.4rem 0;
        max-width: 100%;
        width: 100%;
        height: auto;
        flex-direction: column;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: all 0.4s;

        &.actvie {
          right: 0;
          opacity: 1;
        }

        > li {
          max-width: 100%;
          width: 100%;
          height: 1.6rem;
          text-align: left;

          &.active > a {
            color: rgba(51, 51, 51, 1);
          }

          > a {
            padding: 0 0.6rem;
            font-size: 0.64rem;
            line-height: 1.6rem;
            color: rgba(51, 51, 51, 0.6);
          }
        }

        .line {
          display: none;
        }
      }
    }
  }

  .white {
    .flex {
      .toggle {
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
</style>
