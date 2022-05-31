<template>
  <div class="footer">
    <div class="container">
      <div class="row contact">
        <div class="col-12">粤公网安备44030702002388号（占位文）</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  padding: 52px 0;
  background: rgba(255, 255, 255, 1);
  box-shadow: inset 0 1px 0 #e5e6e8;

  .contact {
    font-size: 16px;
    line-height: 19px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #666666;
    text-align: center;

    .col-12 {
      margin: 4px 0;
    }
  }
}

@media (max-width: 576px) {
  .footer {
    padding: 1.2rem 0;

    .contact {
      font-size: 0.64rem;
      line-height: 0.76rem;
    }
  }
}
</style>
