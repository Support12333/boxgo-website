<template>
  <div class="main">
    <div class="container">
      <div class="head">
        <ul class="menu">
          <div class="logo"><img src="@assets/logo.png" alt=""></div>
          <li>Prize display</li>
          <li>About box go</li>
        </ul>
        <div class="download">Download APP</div>
      </div>
      <div class="box">
        <div class="row">
          <div class="col-12 col-lg-7 left">
            <div class="title">Box Go</div>
            <div class="tit">This Box is Awesome</div>
            <div class="txt">
              <div>1, Unboxing online, lots of surprises</div>
              <div>2. Directly recycle items you don't like</div>
              <div>3. Authentic trendy goods, fun game play</div>
              <div>4. Buff blessing, good luck upgrade</div>
            </div>
            <div class="download"><a href="">Download APP</a></div>
          </div>
          <div class="col-12 col-lg-5">
            <div class="image"></div>
          </div>
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
.main {
  width: 100%;
  height: 1046px;
  background-image: url("~@assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .head {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    .flex(space-between, center);

    .menu {
      height: 104px;
      .fa(center);

      .logo {
        >img {
          width: 56px;
          height: 56px;
        }

        margin-right: 40px;
      }

      >li {
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        text-transform: capitalize;
        text-align: center;
        width: 214px;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
      }
    }

    .download {
      cursor: pointer;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #FFFFFF;
      padding: 8px 16px;
      border: 1px solid #FFFFFF;
      border-radius: 65px;
    }
  }

  .box {
    font-weight: 700;
    color: #FFFFFF;
    margin-top: 80px;

    .left {
      .fj(center);
      flex-direction: column;

      .title {
        font-size: 48px;
        line-height: 56px;
      }

      .tit {
        margin-top: 16px;
        font-size: 56px;
        line-height: 64px;
      }

      .txt {
        margin: 40px 0;

        >div {
          font-size: 20px;
          line-height: 28px;
        }
      }

      .download {
        >a {
          font-size: 16px;
          line-height: 24px;
          color: #FF470E;
          padding: 8px 16px;
          background-color: #FFFFFF;
          border-radius: 65px;
        }

      }

    }

    .image {
      width: 100%;
      height: 576px;
      background-image: url("~@assets/banner.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;

    }
  }
}
</style>
