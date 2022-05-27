<template>
  <section class="introduce">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title" id="introduce1">
            <span>平台介绍</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="image" id="introduce2"></div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="item" id="introduce3">
            <div class="tit">助力企业打开海外市场</div>
            <div class="txt">
              聚合出海，是一家致力于服务中国互联网企业走向全球的综合服务平台；凭借七大核心业务，利用全链路营销模式和全球数字广告资源，帮助企业解决出海面临的每一个问题，深层次触达投放-引流-转化的每一个销售节点，让海外营销利益最大化。
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    $(document).scroll(() => {
      for (let index = 1; index < 4; index++) {
        Restore(`#introduce${index}`);
      }
    });
  },
};
</script>

<style lang="less" scoped>
.introduce {
  position: relative;
  padding: 82px 0;

  .title {
    position: relative;
    margin-bottom: 56px;
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

  .image {
    position: relative;
    height: 464px;
    background-image: url("~@assets/introduce.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    transform: translateY(100px);
    opacity: 0;
  }

  .item {
    position: relative;
    padding: 40px;
    transform: translateY(100px);
    opacity: 0;

    .tit {
      font-size: 24px;
      line-height: 36px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }

    .txt {
      margin-top: 24px;
      font-size: 16px;
      line-height: 32px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #666666;
    }
  }
}

@media (max-width: 576px) {
  .introduce {
    padding: 1.64rem 0 0;

    .title {
      margin-bottom: 1.6rem;
      height: 2.56rem;

      &::after {
        .size(1.6rem, 0.08rem);
      }

      > span {
        font-size: 1.44rem;
        line-height: 2.16rem;
      }
    }

    .image {
      height: 18.56rem;
    }

    .item {
      padding: 1.6rem 0.8rem 0;

      .tit {
        font-size: 0.96rem;
        line-height: 1.44rem;
      }

      .txt {
        margin-top: 0.96rem;
        font-size: 0.64rem;
        line-height: 1.28rem;
      }
    }
  }
}
</style>
