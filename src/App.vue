<template>
  <div>
    <!-- <link rel="stylesheet" href="@/assets/css/index.css" /> -->
    <intro id="intro" />
    <navMenu />
    <about id="about" />
    <project id="project" />
    <cloning id="cloning" />
    <contact id="contact" />
  </div>
</template>

<script>
import intro from "./components/intro.vue";
import navMenu from "./components/nav.vue";
import about from "./components/about.vue";
import project from "./components/project.vue";
import cloning from "./components/cloning.vue";
import contact from "./components/contact.vue";
import "@/assets/css/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  components: {
    intro,
    navMenu,
    about,
    project,
    cloning,
    contact,
  },
  created() {
    AOS.init({
      once: true,
    });
  },
};
</script>

<style>
#app {
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #616161;
}
</style>
