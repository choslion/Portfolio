<template>
  <div class="practice-img__wrap">
    <div class="practice-img__message">
      <a :href="url"><img :src="img" alt="랜덤게임" /></a>
    </div>
    <div class="practice-img__message">
      <a :href="url"><img :src="img" alt="서문야시장" /></a>
    </div>
    <div class="practice-img__message">
      <a :href="url"><img :src="img" alt="싱그러운집" /></a>
    </div>
    <div class="practice-img__message">
      <a :href="url"><img :src="img" alt="도시락통" /></a>
    </div>
    <div class="practice-img__message">
      <a :href="url"><img :src="img" alt="리치먼드" /></a>
    </div>
    <div class="practice-img__message">
      <a :href="url"><img :src="img" alt="승혁의 유튜브" /></a>
    </div>
    <div class="practice-img__message">
      <a :href="url" target="_blank"><img class="kokoa-clone" :src="img" alt="카카오톡 클론" /></a>
    </div>
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
