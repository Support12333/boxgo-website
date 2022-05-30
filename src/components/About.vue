<template>
  <section id="about" class="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title" id="about1">
            <span>关于我们</span>
          </div>
        </div>
        <div class="col-12">
          <div class="content" id="about2">
            长沙推客广告有限公司是一家专业服务于出海企业的跨境综合服务商，公司坐落于星城长沙，现有专业出海服务人员近200人，年服务客户500余家，年产值2亿+，业务覆盖全球200多个国家和地区。
          </div>
        </div>
        <div class="col-12">
          <div class="content" id="about3" style="margin-top: 20px">
            2022年，公司自主研发并打通出海服务全链路，正式上线聚合出海服务平台。平台以全球市场和消费者为基点，利用数据赋能，匹配定制化营销体系，满足中国企业海外获客、广告运营、金融服务、海外KOL、海外直播带货等一系列需求，帮助企业解决出海遇到的每一个难题。
          </div>
        </div>
        <div class="col-12">
          <div class="image" id="about4"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    $(document).scroll(() => {
      for (let index = 1; index < 5; index++) {
        Restore(`#about${index}`);
      }
    });
  },
};
</script>

<style lang="less" scoped>
.about {
  position: relative;
  padding: 82px 0;

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

  .content {
    margin-top: 50px;
    font-size: 16px;
    line-height: 24px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    transform: translateY(100px);
    opacity: 0;
  }

  .image {
    position: relative;
    margin-top: 30px;
    height: 424px;
    background-image: url("~@assets/about.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    transform: translateY(100px);
    opacity: 0;
  }
}

@media (max-width: 576px) {
  .about {
    padding: 3.28rem 0 1.64rem;

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

    .content {
      margin-top: 1.2rem;
      font-size: 0.64rem;
      line-height: 0.96rem;
    }

    .image {
      margin-top: 1.2rem;
      height: 16.96rem;
    }
  }
}
</style>
