<template>
  <div class="nav-wrap">
    <nav>
      <div id="mySidenav" class="sideNav" v-show="open == true">
        <a href="#" v-on:click="goSection" data-target="about" class="toSection" @click="open = false">About</a>
        <a href="#" v-on:click="goSection" data-target="project" class="toSection" @click="open = false">Project</a>
        <a href="#" v-on:click="goSection" data-target="cloning" class="toSection" @click="open = false">Practice</a>
        <a href="#" v-on:click="goSection" data-target="contact" class="toSection" @click="open = false">Contact</a>
      </div>
      <ul class="nav-menu">
        <li v-on:click="goSection" data-target="about" class="toSection">About</li>
        <li v-on:click="goSection" data-target="project" class="toSection">Project</li>
        <li v-on:click="goSection" data-target="cloning" class="toSection">Practice</li>
        <li v-on:click="goSection" data-target="contact" class="toSection">Contact</li>
      </ul>
      <div class="mo-nav">
        <font-awesome-icon v-on:click="openNav" icon="fa-solid fa-bars" size="2x" />
      </div>
      <div class="time">
        <span> {{ getFullTime }} </span>
      </div>
    </nav>
  </div>
</template>
<script>
import { reactive, computed, ref, onMounted } from 'vue';
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
  setup() {
    const open = ref(false);
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
    const openNav = function () {
      open.value = !open.value;
    };
    const sideNav = function () {};
    onMounted(() => {
      getTime();
    });
    return {
      open,
      getFullTime,
      openNav,
      sideNav,
    };
  },
};
</script>
<style scope>
.sideNav {
  width: 100%;
  height: 50px;
  background-color: #555555;
  position: absolute;
  /* opacity: 0; */
  top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.sideNav a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease-in-out;
}
.sideNav a:hover {
  color: #04c2c9;
}

.nav-wrap {
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #1b242f;
  height: 50px;
  border-bottom: 3px solid #04c2c9;
  position: sticky;
  top: 0;
  z-index: 9999;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mo-nav {
  display: none;
}

nav.nav-menu {
  display: flex;
  align-items: center;
}

.nav-menu li {
  cursor: pointer;
  margin-left: 120px;
  transition: color 0.3s ease-in-out;
}

.nav-menu li:hover {
  color: #04c2c9;
}
.mo-nav {
  display: none;
}

@media screen and (max-width: 1000px) {
  .nav-menu {
    display: none;
  }

  .mo-nav {
    display: block;
  }
}
</style>
