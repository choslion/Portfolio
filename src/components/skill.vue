<template>
  <div>
    <!-- :style="{ 'width': percent + '%' }" -->
    <div class="skill">
      <div class="skill-percent">
        <div class="skill-name flex-set">{{ name }}</div>
      </div>
      <span class="percent">{{ percent }}%</span>
    </div>
  </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core';
export default {
  data() {
    return {
      isActive: false,
    };
  },

  props: {
    name: String,
    percent: Number,
  },

  setup() {},
};
</script>
<style scope>
.active {
  transition: all 2s ease-in-out;
}
</style>
