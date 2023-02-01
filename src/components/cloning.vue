<template>
  <div class="section-cloning">
    <div class="section-wrap">
      <div class="section-title">
        <h1 id="cloning" class="title">Practice</h1>
        <div class="underLine"></div>
      </div>
      <div class="practice-img__wrap">
        <cloningModule v-for="item in cloningModule" :key="item" :url="item.url" :img="item.img" />
      </div>
    </div>
  </div>
</template>
<script>
import cloningModule from './cloningModule.vue';
export default {
  components: {
    cloningModule,
  },
  data() {
    return {
      arco: false,
    };
  },

  setup() {
    const cloningModule = [
      {
        url: 'https://choslion.github.io/jschallenge/random.html',
        img: require(`@/assets/img/randomGame.png`),
      },
      {
        url: 'https://choslion.github.io/seomoon/',
        img: require(`@/assets/img/seomoon.png`),
      },
      {
        url: 'https://choslion.github.io/housefresh/',
        img: require(`@/assets/img/freshMain.png`),
      },
      {
        url: 'https://choslion.github.io/dosirak/',
        img: require(`@/assets/img/dosirak.png`),
      },
      {
        url: 'https://choslion.github.io/richmond/',
        img: require(`@/assets/img/richmond.png`),
      },
      {
        url: 'https://choslion.github.io/jschallenge/log.html',
        img: require(`@/assets/img/todo.png`),
      },
      {
        url: 'https://choslion.github.io/kokoa-clone/',
        img: require(`@/assets/img/kakao4.png`),
      },
      {
        url: 'https://choslion.github.io/kokoa-clone/',
        img: require(`@/assets/img/kakao1.png`),
      },
      {
        url: 'https://choslion.github.io/kokoa-clone/',
        img: require(`@/assets/img/kakao2.png`),
      },
    ];
    return {
      cloningModule,
    };
  },
};
</script>
<style scoped>
/* .fadeA-enter-from {
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
} */
</style>
