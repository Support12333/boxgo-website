<template>
  <section id="about" class="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title" id="about1">
            <span>关于我们</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="item" id="about2">
            <div>
              长沙推客广告有限公司是一家专业服务于出海企业的跨境综合服务商，公司坐落于星城长沙，现有专业出海服务人员近200人，年服务客户500余家，年产值2亿+，业务覆盖全球200多个国家和地区。
            </div>
            <div>
              2022年，公司自主研发并打通出海服务全链路，正式上线聚合出海服务平台。平台以全球市场和消费者为基点，利用数据赋能，匹配定制化营销体系，满足中国企业海外获客、广告运营、金融服务、海外KOL、海外直播带货等一系列需求，帮助企业解决出海遇到的每一个难题。
            </div>
            <div>联系人：许经理</div>
            <div>联系方式：17267286526</div>
            <div>地址：长沙市岳麓区长沙芯城科技园1栋704室</div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="image" id="about3"></div>
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
        Restore(`#about${index}`);
      }
    });
  },
};
</script>

<style lang="less" scoped>
.about {
  position: relative;
  padding: 82px 0 164px;

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

  .item {
    position: relative;
    padding: 40px;
    font-size: 16px;
    line-height: 24px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #666666;
    transform: translateY(100px);
    opacity: 0;

    > div + div {
      margin-top: 16px;
    }

    > div:nth-child(3) {
      margin-top: 56px;
    }
  }

  .image {
    position: relative;
    height: 472px;
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
    padding: 3.28rem 0;

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

    .item {
      padding-top: 0;
      font-size: 0.64rem;
      line-height: 0.96rem;

      > div + div {
        margin-top: 0.64rem;
      }

      > div:nth-child(3) {
        margin-top: 1.44rem;
      }
    }

    .image {
      height: 18.88rem;
    }
  }
}
</style>
