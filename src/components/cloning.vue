<template>
  <h1>Practice</h1>
  <div class="sectionMove" id="cloning">
    <!-- <button @click="arco = !arco">Cloning</button>
    <transition name="fadeA">
      <h2 v-if="arco == true">cloning contents</h2>
    </transition> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      arco: false,
    };
  },
};
</script>
<style scoped>
.sectionMove {
  width: 100%;
  height: 930px;
  background-color: darkblue;
}

.fadeA-enter-from {
  opacity: 0;
}
.fadeA-enter-active {
  transition: opacity 0.6s ease-in-out;
}
.fadeA-enter-to {
  opacity: 1;
}

.fadeA-leave-from {
  opacity: 1;
}
.fadeA-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fadeA-leave-to {
  opacity: 0;
}
</style>
