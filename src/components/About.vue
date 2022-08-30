<template>
  <div class="about" id="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title">
            About box go
          </div>
        </div>
        <div class="col-12 col-md-1"></div>
        <div class="col-12 col-md-10">
          <div class="txt">box go is a practical mobile shopping software. The platform provides the latest commodity
            resources in real time, with strong service capabilities, a complete range of commodities, simple operation
            and a lot of discounts.</div>
          <div class="txt">Whether it is a product that boys like or girls like, it can be purchased from the software.
          </div>
          <div class="txt">After the payment is successful, you can quickly open the Mystery box and view related
            products.</div>
          <div class="txt">All blind boxes have no empty prizes, no need to worry about buying fake goods.</div>
          <div class="txt">A lot of goodies are available for purchase, and you can choose whatever you want.</div>
        </div>
        <div class="col-12 col-md-1"></div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    $(document).scroll(() => {
      for (let index = 1; index < 1; index++) {
        Restore(`#about${index}`);
      }
    });
  },
};
</script>
<style lang="less" scoped>
.about {
  .title {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    text-transform: capitalize;
    color: #131414;
    text-align: center;
    margin: 80px 0 24px;
  }

  .txt {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    color: #131414;
    margin-top: 16px;
  }
}

@media (max-width:992px) {
  .about {
    .title {
      font-size: 38px;
      line-height: 48px;
      margin: 60px 0 20px;
    }

    .txt {
      font-size: 14px;
      line-height: 22px;
      margin-top: 14px;
    }
  }
}

@media (max-width:576px) {
  .about {
    .title {
      font-size: .96rem;
      line-height: 1.28rem;
      margin: .96rem 0 .64rem;
    }

    .txt {
      font-weight: 400;
      font-size: .56rem;
      line-height: .88rem;
      text-align: center;
      text-transform: capitalize;
      color: #131414;
      margin-top: .32rem;
    }
  }
}
</style>
