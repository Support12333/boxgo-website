<template>
  <div id="app">
    <Layout />
    <Banner />
    <Business />
    <Introduce />
    <About />
    <Footer />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import Banner from "./components/Banner.vue";
import Business from "./components/Business.vue";
import Introduce from "./components/Introduce.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Layout, Banner, Business, Introduce, About, Footer },
};
</script>

<style lang="less">
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
}

@keyframes bottomShow {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

html,
body {
  height: 100%;
  background: rgba(244, 244, 244, 1);
}

#app {
  height: 100%;
  background: #f6f6f6;
}

.row {
  --bs-gutter-x: 24px !important;
}

.adapterMixin();
</style>
