<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="policy">
            <div class="arrow"><a href="">Terms of Service</a></div>
            <div class="arrow"><a href="">Privacy Policy</a></div>
            <div><a href="">Email：first@pandotar.com</a></div>
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

    >div>a {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      text-transform: capitalize;
      color: #606266;
    }

    div+div {
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

@media (max-width:992px) {
  .footer {
    margin-top: 90px;
    padding: 25px 0;

    .policy {
      div+div {
        margin-left: 40px;
      }
    }

    .line {
      margin: 18px 0;
    }
  }
}

@media (max-width:576px) {
  .footer {
    margin-top: 1.6rem;
    padding: .64rem 0 .96rem;

    .policy {
      .fa(flex-start);
      flex-direction: column;

      >div {
        width: 100%;

        >a {
          font-size: .56rem;
          line-height: .88rem;
          padding: 8px 0;
        }
      }

      .arrow {
        position: relative;

        &::after {
          content: "";
          height: .4rem;
          width: .4rem;
          position: absolute;
          top: 50%;
          right: .32rem;
          border-width: 2px 2px 0 0;
          border-color: #909399;
          border-style: solid;
          transform:translateY(-50%) matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        }
      }

      div+div {
        margin-left: 0;
      }
    }

    .line {
      margin: .48rem 0;
    }

    .company {
      font-size: .48rem;
      line-height: .8rem;
    }
  }
}
</style>
