<template>
  <div class="nav-wrap">
    <nav>
      <ul class="nav-menu">
        <li v-on:click="goSection" data-target="about" class="toSection">About</li>
        <li v-on:click="goSection" data-target="project" class="toSection">Project</li>
        <li v-on:click="goSection" data-target="cloning" class="toSection">Practice</li>
        <li v-on:click="goSection" data-target="contact" class="toSection">Contact</li>
        <div class="mo-nav">
          <font-awesome-icon icon="fa-solid fa-bars" size="2x" />
        </div>
      </ul>
      <div class="time">
        <span>현재시간</span>
        <span> {{ getFullTime }} </span>
      </div>
    </nav>
  </div>
</template>
<script>
import { reactive, computed, ref, onMounted } from 'vue';
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
  setup() {
    const getFullTime = ref('');
    function getTime() {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      getFullTime.value = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(() => {
      getTime();
    }, 1000);
    onMounted(() => {});
    return {
      getFullTime,
    };
  },
};
</script>
<style scope></style>
