<template>
  <div class="modal" v-if="kibuttz == true">
    <button><font-awesome-icon @click="kibuttz = false" icon="fa-regular fa-circle-xmark" size="3x" /></button>
    <div class="flex-set">
      <img src="img/kibuttz.png" alt="키부츠코리아 설명" />
    </div>
  </div>
  <div class="modal" v-if="takju == true">
    <button><font-awesome-icon @click="takju = false" icon="fa-regular fa-circle-xmark" size="3x" /></button>
    <div class="flex-set">
      <img src="img/seoul.png" alt="서울탁주 설명" />
    </div>
  </div>
  <div>
    <section class="section-project">
      <div class="section-wrap">
        <div class="section-title">
          <h1 class="title" id="project">Project</h1>
          <div class="underLine"></div>
        </div>
        <ul class="project-contents">
          <li class="project-content__img">
            <img src="img/kibuttzMain.png" alt="키부츠코리아 메인사진" />
          </li>
          <li class="project-content__info">
            <p>개인프로젝트 : 승혁의 유튜브</p>
            <p>제작기간 : 2022.12 ~ 2023.2</p>
            <p>기여도 : 100%</p>
            <p>사용한 기술 : HTML , CSS, Javascript, PUG, MongoDB</p>
            <p>
              이스라엘 봉사활동을 가고 싶은 청년들을 현지인과
              <br />
              연결시켜 갈 수 있게 도와주는 사이트.
            </p>
            <p>
              <font-awesome-icon class="icons" icon="fa-brands fa-github" size="2x" />
              <font-awesome-icon @click="kibuttz = true" class="icons" icon="fa-brands fa-figma" size="2x" />
              <font-awesome-icon class="icons" icon="fa-brands fa-aws" size="2x" />
            </p>
          </li>
        </ul>
        <ul class="project-contents">
          <li class="project-content__img">
            <img src="img/seoulTakjuMain.png" alt="서울탁주 메인사진" />
          </li>
          <li class="project-content__info">
            <p>개인프로젝트 : 서울탁주</p>
            <p>제작기간 : 2022.11 ~ 2022.12</p>
            <p>기여도 : 33.3333%</p>
            <p>사용한 기술 : HTML , CSS, Javascript, Node.js, MySQL</p>
            <p>
              이스라엘 봉사활동을 가고 싶은 청년들을 현지인과
              <br />
              연결시켜 갈 수 있게 도와주는 사이트.
            </p>
            <p>
              <font-awesome-icon class="icons" icon="fa-brands fa-github" size="2x" />
              <font-awesome-icon @click="takju = true" class="icons" icon="fa-brands fa-figma" size="2x" />
              <font-awesome-icon class="icons" icon="fa-brands fa-aws" size="2x" />
            </p>
          </li>
        </ul>
        <ul class="project-contents">
          <li class="project-content__img">
            <img src="img/kibuttzMain.png" alt="키부츠코리아 메인사진" />
          </li>
          <li class="project-content__info">
            <p>개인프로젝트 : 키부츠코리아</p>
            <p>제작기간 : 2022.11 ~ 2022.12</p>
            <p>기여도 : 100%</p>
            <p>사용한 기술 : HTML , CSS, Javascript, Node.js, MySQL</p>
            <p>
              이스라엘 봉사활동을 가고 싶은 청년들을 현지인과
              <br />
              연결시켜 갈 수 있게 도와주는 사이트.
            </p>
            <p>
              <font-awesome-icon class="icons" icon="fa-brands fa-github" size="2x" />
              <font-awesome-icon class="icons" icon="fa-brands fa-figma" size="2x" />
              <font-awesome-icon class="icons" icon="fa-brands fa-aws" size="2x" />
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kibuttz: false,
      takju: false,
    };
  },
};
</script>
<style scoped></style>
