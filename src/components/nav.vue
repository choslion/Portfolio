<template>
  <div class="nav-wrap">
    <nav>
      <ul class="nav-menu">
        <li v-on:click="goSection" data-target="about" class="toSection">About</li>
        <li v-on:click="goSection" data-target="project" class="toSection">Project</li>
        <li v-on:click="goSection" data-target="cloning" class="toSection">Practice</li>
        <li v-on:click="goSection" data-target="contact" class="toSection">Contact</li>
      </ul>
      <div class="time">
        <span>현재시간</span>
        <!-- <span v-bind="getTime()">{{ getTime }}</span> -->
      </div>
    </nav>
  </div>
</template>
<script>
import { reactive, computed } from 'vue';
export default {
  data() {
    return {
      data: '00:00:00',
    };
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
  },
  //   setup() {
  //   const date = new.Date();
  //   const getTime = function() {
  //     const hours = String(date.getHours()).padStart(2,"0");
  //     const minutes = String(date.getMinutes()).padStart(2,"0");
  //     const seconds = String(date.getSeconds()).padStart(2,"0");
  //   }
  //   return {
  //     getTime,
  //     hours,
  //     minutes,
  //     seconds,
  //   }
  // }
};
</script>
<style scope></style>
