<template>
  <section id="business" class="business">
    <div class="container">
      <div class="row head">
        <div class="col-12">
          <div class="title" id="business1">
            <span>我们能做什么</span>
          </div>
        </div>
        <div class="col-12 col-lg-2"></div>
        <div class="col-12 col-lg-8">
          <div class="describe" id="business2">
            为企业提供可定制组合的全案服务产品，满足电商、游戏、APP、品牌等中国企业的海外商业深入拓展
          </div>
        </div>
        <div class="col-12 col-lg-2"></div>
      </div>
      <div class="row body">
        <div class="col-12 col-lg-8" id="business3">
          <div
            class="item"
            @mouseenter="hoverItem($event)"
            @mouseleave="leaveItem($event)"
          >
            <div>
              <div class="tit">大媒体开户业务</div>
              <div class="txt">
                facebook、google、tiktok等主流媒体及当地媒体一站式账户管理服务，帮助企业实现绿色通道快速开户
              </div>
              <div class="footer">
                <div @click="show = true">
                  <span>立即了解</span>
                  <i class="iconfont icon-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4" id="business4">
          <div
            class="item"
            @mouseenter="hoverItem($event)"
            @mouseleave="leaveItem($event)"
          >
            <div>
              <div class="tit">金融兑换业务</div>
              <div class="txt">
                支持全球金融兑换服务，响应快，资金安全有保障，24小时专属客服
              </div>
              <div class="footer">
                <div @click="show = true">
                  <span>立即了解</span>
                  <i class="iconfont icon-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6" id="business5">
          <div
            class="item"
            @mouseenter="hoverItem($event)"
            @mouseleave="leaveItem($event)"
          >
            <div>
              <div class="tit">资深代运营业务</div>
              <div class="txt">
                全球资源代运营服务，24小时专属优化师服务，实时策划调整，为企业ROI保驾护航
              </div>
              <div class="footer">
                <div @click="show = true">
                  <span>立即了解</span>
                  <i class="iconfont icon-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6" id="business6">
          <div
            class="item"
            @mouseenter="hoverItem($event)"
            @mouseleave="leaveItem($event)"
          >
            <div>
              <div class="tit">海外红人营销</div>
              <div class="txt">
                一手对接全球海量优质KOL，覆盖主流媒体平台及热门出海地区
              </div>
              <div class="footer">
                <div @click="show = true">
                  <span>立即了解</span>
                  <i class="iconfont icon-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4" id="business7">
          <div
            class="item"
            @mouseenter="hoverItem($event)"
            @mouseleave="leaveItem($event)"
          >
            <div>
              <div class="tit">出海担保业务</div>
              <div class="txt">
                全球出海担保服务，价格透明合理，公平公正交易，保障供方与需方资金安全，为您省时省心
              </div>
              <div class="footer">
                <div @click="show = true">
                  <span>立即了解</span>
                  <i class="iconfont icon-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4" id="business8">
          <div
            class="item"
            @mouseenter="hoverItem($event)"
            @mouseleave="leaveItem($event)"
          >
            <div>
              <div class="tit">人工翻译业务</div>
              <div class="txt">
                支持全球各语种翻译，服务贴心，实时响应，严格保密，追求客户长期合作共赢
              </div>
              <div class="footer">
                <div @click="show = true">
                  <span>立即了解</span>
                  <i class="iconfont icon-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4" id="business9">
          <div
            class="item"
            @mouseenter="hoverItem($event)"
            @mouseleave="leaveItem($event)"
          >
            <div>
              <div class="tit">国际短信业务</div>
              <div class="txt">
                支持欧美、东南亚、东亚地区国际短信，多年架构和方案设计经验，为客户提供定制化解决方案
              </div>
              <div class="footer">
                <div @click="show = true">
                  <span>立即了解</span>
                  <i class="iconfont icon-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系客服弹层 -->
    <el-dialog
      :visible.sync="show"
      width="40%"
      top="0"
      custom-class="serviceDialog"
    >
      <div class="service">
        <div class="images">
          <img src="@assets/qr.png" />
        </div>
        <div class="tips">扫描二维码添加VX</div>
        <div class="tips">能获得更方便及时的回复哦~</div>
        <div class="footer">
          <el-button type="primary" @click="show = false">已添加</el-button>
        </div>
      </div>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    if ($(window).width() < 576) {
      for (let index = 1; index < 3; index++) {
        Restore(`#business${index}`);
      }
    }
    $(document).scroll(() => {
      for (let index = 1; index < 10; index++) {
        Restore(`#business${index}`);
      }
    });
  },
  methods: {
    // 进入
    hoverItem(e) {
      const item = $(e.target).children();
      if ($(window).width() < 576) {
        const htmlArr = window.getComputedStyle(
          window.document.documentElement
        );
        const fontSize = htmlArr["font-size"].replace(/px/g, "");
        item.css("height", item[0].scrollHeight + 0.8 * fontSize);
      } else {
        item.css("height", item[0].scrollHeight + 40);
      }
    },
    // 离开
    leaveItem(e) {
      const item = $(e.target).children();
      if ($(window).width() < 576) {
        const htmlArr = window.getComputedStyle(
          window.document.documentElement
        );
        const fontSize = htmlArr["font-size"].replace(/px/g, "");
        item.css("height", 2.56 * fontSize);
      } else {
        item.css("height", 84);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.business {
  position: relative;
  padding: 132px 0 82px;

  .head {
    position: relative;
    margin: 32px 0;

    .title {
      position: relative;
      height: 64px;
      text-align: center;
      transform: translateY(100px);
      opacity: 0;

      &::after {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        content: "";
        .size(40px, 2px);
        background: rgba(22, 93, 255, 1);
      }

      > span {
        font-size: 36px;
        line-height: 54px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
    }

    .describe {
      margin: 12px auto 0;
      font-size: 16px;
      line-height: 24px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      text-align: center;
      transform: translateY(100px);
      opacity: 0;
    }
  }

  .body {
    position: relative;

    .col-12 {
      margin-top: 24px;
      transform: translateY(100px);
      opacity: 0;

      .item {
        position: relative;
        height: 456px;
        overflow: hidden;
        color: #ffffff;
        transition: all 0.4s;

        &:hover {
          transform: scale(1.02);
        }

        > div {
          position: absolute;
          bottom: 0;
          padding: 40px 32px 0;
          height: 84px;
          transition: all 0.4s;

          .tit {
            font-size: 24px;
            line-height: 36px;
            font-family: Microsoft YaHei-Bold, Microsoft YaHei;
            font-weight: bold;
          }

          .txt {
            margin-top: 8px;
            font-size: 16px;
            line-height: 24px;
            font-family: Microsoft YaHei-Regular, Microsoft YaHei;
            font-weight: 400;
          }

          .footer {
            margin-top: 8px;
            display: flex;

            > div {
              position: relative;
              font-size: 16px;
              line-height: 21px;
              font-family: Microsoft YaHei-Regular, Microsoft YaHei;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.8);
              cursor: pointer;
              .fa(center);
              transition: all 0.4s;

              &::after {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                content: "";
                border-bottom: 3px solid #0086ff;
              }

              &:hover {
                color: rgba(255, 255, 255, 1);

                > i {
                  margin-left: 24px;
                }
              }

              > i {
                margin-left: 4px;
                font-size: 16px;
                line-height: 16px;
                transition: all 0.4s;
              }
            }
          }
        }
      }
    }

    .col-12:nth-child(1) .item {
      background-image: url("~@assets/business1.webp");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .col-12:nth-child(2) .item {
      background-image: url("~@assets/business2.webp");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .col-12:nth-child(3) .item {
      background-image: url("~@assets/business3.webp");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .col-12:nth-child(4) .item {
      background-image: url("~@assets/business4.webp");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .col-12:nth-child(5) .item {
      background-image: url("~@assets/business5.webp");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .col-12:nth-child(6) .item {
      background-image: url("~@assets/business6.webp");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    .col-12:nth-child(7) .item {
      background-image: url("~@assets/business7.webp");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  /deep/.serviceDialog {
    top: 50%;
    margin-bottom: 0;
    transform: translateY(-50%);
    background: #ffffff;
    border-radius: 12px;

    .el-dialog__header,
    .el-dialog__body {
      padding: 0;
    }

    .service {
      padding: 42px 0;

      .images {
        position: relative;
        .fj(center);

        > img {
          width: 200px;
        }
      }

      .tips {
        font-size: 20px;
        line-height: 32px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #333333;
        text-align: center;
      }

      .footer {
        margin-top: 24px;
        .fj(center);

        > button {
          padding: 0;
          .size(126px, 40px);
          font-size: 16px;
          line-height: 24px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          border-radius: 6px;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .business {
    padding: 2.64rem 0 1.64rem;

    .head {
      margin: 0.64rem 0;

      .title {
        height: 2.56rem;

        &::after {
          .size(1.6rem, 0.08rem);
        }

        > span {
          font-size: 1.44rem;
          line-height: 2.16rem;
        }
      }

      .describe {
        margin: 0.48rem auto 0;
        font-size: 0.64rem;
        line-height: 0.96rem;
      }
    }

    .body {
      .col-12 {
        margin-top: 0.96rem;

        .item {
          height: 18.24rem;

          > div {
            padding: 0.8rem 0.64rem 0;
            bottom: 0;
            height: 2.56rem;

            .tit {
              font-size: 0.96rem;
              line-height: 1.44rem;
            }

            .txt {
              margin-top: 0.32rem;
              font-size: 0.64rem;
              line-height: 0.96rem;
            }

            .footer {
              margin-top: 0.32rem;

              > div {
                font-size: 0.64rem;
                line-height: 0.84rem;

                &::after {
                  border-bottom-width: 0.12rem;
                }

                &:hover {
                  > i {
                    margin-left: 0.8rem;
                  }
                }

                > i {
                  margin-left: 0.16rem;
                  font-size: 0.64rem;
                  line-height: 0.64rem;
                }
              }
            }
          }
        }
      }
    }

    /deep/.serviceDialog {
      width: 80% !important;
      border-radius: 0.48rem;

      .service {
        padding: 1.28rem 0;

        .images {
          > img {
            width: 8rem;
          }
        }

        .tips {
          font-size: 0.64rem;
          line-height: 1.12rem;
        }

        .footer {
          margin-top: 0.96rem;

          > button {
            .size(5.04rem, 1.6rem);
            font-size: 0.64rem;
            line-height: 0.96rem;
            border-radius: 0.24rem;
          }
        }
      }
    }
  }
}
</style>
