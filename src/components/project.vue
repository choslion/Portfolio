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
        <project-module
          v-for="item in projectModuel"
          :key="item"
          :title="item.title"
          :date="item.date"
          :img="item.img"
          :introduce="item.introduce"
          :feeling="item.feeling"
          :mainFunc="item.mainFunc"
          :github="item.github"
          :figma="item.figma"
          :aws="item.aws"
        />
        <!-- <div class="project-wrap">
          <div class="project-title">키부츠코리아</div>
          <div class="project-date">2022.11 ~ 2022.12 (개인프로젝트)</div>
          <div class="project-info">
            <div class="project-info__imgs">
              <img src="img/kibuttzMain.png" alt="키부츠메인" />
            </div>
            <div class="project-info__contents">
              <div style="font-size: 1rem">
                <div>
                  저의 첫 개인 프로젝트 입니다. 독자적인 사이트를 가지고 리뉴얼 해보는것을 경험하였고 <span>MySQL, EJS템플릿을 이용한 모듈화, Node.js를 이용한 서버열기</span>를 처음으로 해보았는데
                  MySQL을 페이지와 연결할때 고민하고.....중략 배웠던 프로젝트 입니다.
                  <p>홈페이지 구조를 보고 이해하는 능력이 생겼고 백엔드 공부를 해봄으로써 프론트,백엔드 개발자가 서로 어떻게 소통해야하는지 알게 되었습니다.</p>
                </div>
              </div>
              <hr />
              <ul class="project-contents__ul">
                <li class="project-contents__li">
                  <div>
                    <span><font-awesome-icon icon="fa-solid fa-check" /></span>
                    <div class="project__main-func">주요기능</div>
                  </div>
                  <div>정보알리기,게시판작성</div>
                </li>
                <li class="project-contents__li">
                  <div>
                    <span><font-awesome-icon icon="fa-solid fa-check" /></span>
                    <div class="project__main-func">Github</div>
                  </div>
                  <div><a href="https://github.com/choslion/KibuttzKorea" target="_blank">https://github.com/choslion/KibuttzKorea</a></div>
                </li>
                <li class="project-contents__li">
                  <div>
                    <span><font-awesome-icon icon="fa-solid fa-check" /></span>
                    <div class="project__main-func">목업</div>
                  </div>
                  <div><a href="https://github.com/choslion/KibuttzKorea" target="_blank">https://github.com/choslion/KibuttzKorea</a></div>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
        <!-- <ul class="project-contents">
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
              <font-awesome-icon class="icons" icon="fa-brands fa-figma" size="2x" />
              <font-awesome-icon class="icons" icon="fa-brands fa-aws" size="2x" />
            </p>
          </li>
        </ul> -->
      </div>
    </section>
  </div>
</template>
<script>
import projectModule from "./projectModuel.vue";
export default {
  components: {
    projectModule,
  },
  data() {
    return {
      kibuttz: false,
      takju: false,
    };
  },

  setup() {
    const projectModuel = [
      {
        title: "키부츠코리아",
        date: "2022.11 ~ 2022.12 (개인프로젝트)",
        img: require(`../../public/img/kibuttzMain.png`),
        introduce:
          "저의 첫 개인 프로젝트 입니다. 독자적인 사이트를 가지고 리뉴얼 해보는것을 경험하였고 MySQL, EJS템플릿을 이용한 모듈화, Node.js를 이용한 서버열기를 처음으로 해보았는데 MySQL을 페이지와 연결할때 고민하고.....중략 배웠던 프로젝트 입니다.",
        feeling: "홈페이지 구조를 보고 이해하는 능력이 생겼고 백엔드 공부를 해봄으로써 프론트,백엔드 개발자가 서로 어떻게 소통해야하는지 알게 되었습니다.",
        mainFunc: "정보알리기,게시판작성",
        github: "https://github.com/choslion/KibuttzKorea",
        figma: "",
        aws: "",
      },
      {
        title: "키부츠코리아",
        date: "2022.11 ~ 2022.12 (개인프로젝트)",
        img: require(`../../public/img/kibuttzMain.png`),
        introduce:
          "저의 첫 개인 프로젝트 입니다. 독자적인 사이트를 가지고 리뉴얼 해보는것을 경험하였고 MySQL, EJS템플릿을 이용한 모듈화, Node.js를 이용한 서버열기를 처음으로 해보았는데 MySQL을 페이지와 연결할때 고민하고.....중략 배웠던 프로젝트 입니다.",
        feeling: "홈페이지 구조를 보고 이해하는 능력이 생겼고 백엔드 공부를 해봄으로써 프론트,백엔드 개발자가 서로 어떻게 소통해야하는지 알게 되었습니다.",
        mainFunc: "",
        github: "",
        figma: "",
        aws: "",
      },
      {
        title: "키부츠코리아",
        date: "2022.11 ~ 2022.12 (개인프로젝트)",
        img: require(`../../public/img/kibuttzMain.png`),
        introduce:
          "저의 첫 개인 프로젝트 입니다. 독자적인 사이트를 가지고 리뉴얼 해보는것을 경험하였고 MySQL, EJS템플릿을 이용한 모듈화, Node.js를 이용한 서버열기를 처음으로 해보았는데 MySQL을 페이지와 연결할때 고민하고.....중략 배웠던 프로젝트 입니다.",
        feeling: "홈페이지 구조를 보고 이해하는 능력이 생겼고 백엔드 공부를 해봄으로써 프론트,백엔드 개발자가 서로 어떻게 소통해야하는지 알게 되었습니다.",
        mainFunc: "",
        github: "",
        figma: "",
        aws: "",
      },
    ];
    return {
      projectModuel,
    };
  },
};
</script>
<style scoped></style>
