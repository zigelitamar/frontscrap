<template>
  <v-app id="app">
    <sideBar class="sideBar"></sideBar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import sideBar from "./components/sideBar";
// import ArticleGrid from "./components/ArcticleGrid";
export default {
  name: "App",
  components: {
    sideBar,
  },

  data() {
    return {};
  },
};
</script>
<style >
.sidebar {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>