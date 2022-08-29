<template>
  <div id="app">
    <Header />
    <Prize />
    <About />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Prize from "./components/Prize.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Prize, About, Header, Footer },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

img {
  display: block;
}

ul {
  margin: 0 !important;
  padding: 0 !important;
}

ul li {
  list-style: none;
}

a,
button {
  cursor: pointer;
}

a {
  text-decoration: none !important;
  background: transparent;
}

a:active,
a:hover {
  outline: 0;
}

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
  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  background: #F3F3F3;
}

.row {
  --bs-gutter-x: 24px !important;
}

.adapterMixin();
</style>
