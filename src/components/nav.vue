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
      <span>dasdda</span>
      <span>15:35</span>
    </div>
  </div>
</template>
<script>
export default {
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
  },
};
</script>
<style scope>
.nav-wrap {
  display: flex;
  justify-content: space-around;
}
.nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
