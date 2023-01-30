<template>
  <div class="section-cloning">
    <div class="section-wrap">
      <div class="section-title">
        <h1 id="cloning" class="title">Practice</h1>
        <div class="underLine"></div>
      </div>
      <cloningModule v-for="item in cloningModule" :key="item" :url="item.url" :img="item.img" />
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
        img: require(`../../public/img/randomGame.png`),
      },
      {
        url: '',
        img: require(`../../public/img/seomoon.png`),
      },
      {
        url: '',
        img: require(`../../public/img/freshMain.png`),
      },
      {
        url: '',
        img: require(`../../public/img/dosirak.png`),
      },
      {
        url: '',
        img: require(`../../public/img/richmond.png`),
      },
      {
        url: '',
        img: require(`../../public/img/fillerBg.png`),
      },
      {
        url: 'https://choslion.github.io/kokoa-clone/',
        img: require(`../../public/img/kokoa.png`),
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
