<template>
  <div>
    <div class="skill">
      <div v-bind:percent="{ percent }" class="skill-percent">
        <div class="skill-name flex-set">{{ name }}</div>
      </div>
      <span class="percent">{{ percent }}%</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    percent: Number,
  },
};
</script>
<style scope></style>
