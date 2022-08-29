<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="policy">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
            <div>Email：first@pandotar.com</div>
          </div>
          <div class="line"></div>
          <div class="company">Copyright © 2022 Box Go. All Rights Reserved</div>
        </div>
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
};
</script>
<style lang="less" scoped>
.footer {
  margin-top: 140px;
  padding: 40px 0;
  background-color: #FFFFFF;

  .policy {
    .fa(center);
    >div {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      text-transform: capitalize;
      color: #606266;
    }
    div+div{
      margin-left: 40px;
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #E7E7E7;
    margin: 24px 0;
  }

  .company {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-transform: capitalize;
    color: #606266;
  }
}
</style>
