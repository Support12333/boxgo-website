<template>
  <div class="about" id="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title"  id="about1">{{ $t("tit3") }}</div>
        </div>
        <div class="col-12 col-md-1"></div>
        <div class="col-12 col-md-10"  id="about2">
          <div class="txt">{{ $t("txt6") }}</div>
          <div class="txt">{{ $t("txt7") }}</div>
          <div class="txt">{{ $t("txt8") }}</div>
          <div class="txt">{{ $t("txt9") }}</div>
          <div class="txt">{{ $t("txt10") }}</div>
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
      for (let index = 1; index < 3; index++) {
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
