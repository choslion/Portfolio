<template>
  <div class="nav-wrap">
    <nav>
      <ul class="nav-menu">
        <li v-on:click="goSection" data-target="about" class="toSection">About</li>
        <li v-on:click="goSection" data-target="project" class="toSection">Project</li>
        <li v-on:click="goSection" data-target="cloning" class="toSection">Practice</li>
        <li v-on:click="goSection" data-target="contact" class="toSection">Contact</li>
      </ul>
    </nav>
    <div class="time">
      <span>현재시간</span>
      <span v-bind="getTime()">{{ getTime }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goSection(e) {
      e.preventDefault();
      if (!e.target.matches('.toSection')) {
        return;
      }
      const clickNav = document.getElementById(e.target.dataset.target);
      if (clickNav) {
        clickNav.scrollIntoView({ behavior: 'smooth' });
      }
    },
    getTime() {
      const date = new Date();
      date.getHours();
    },
  },
  
};
</script>
<style scope>
.nav-wrap {
  display: flex;
  justify-content: space-around;
  color: #fff;
  background-color: darkred;
}
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
