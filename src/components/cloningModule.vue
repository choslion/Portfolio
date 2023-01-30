<template>
  <div class="practice-img__message">
    <a target="_blank" :href="url"><img :src="img" alt="작업" /></a>
  </div>
</template>
<script>
export default {
  props: {
    url: String,
    img: String,
  },
};
</script>
<style scope></style>
