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
          :contribution="item.contribution"
          :mainFunc="item.mainFunc"
          :url="item.url"
          :github="item.github"
          :figma="item.figma"
          :useSkills="item.useSkills"
        />
      </div>
    </section>
  </div>
</template>
<script>
import projectModule from './projectModuel.vue';
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
        title: '키부츠코리아',
        date: '2022.11 ~ 2022.12 (개인프로젝트)',
        img: require(`../../public/img/kibuttzMain.png`),
        introduce:
          '저의 첫 개인 프로젝트 입니다. 독자적인 사이트를 가지고 리뉴얼 해보는것을 경험하였고 MySQL, EJS템플릿을 이용한 모듈화, Node.js를 이용한 서버열기를 처음으로 해보았는데 MySQL을 페이지와 연결할때 고민하고.....중략 배웠던 프로젝트 입니다.',
        feeling: '홈페이지 구조를 보고 이해하는 능력이 생겼고 백엔드 공부를 해봄으로써 프론트,백엔드 개발자가 서로 어떻게 소통해야하는지 알게 되었습니다.',
        contribution: '100%',
        mainFunc: '회원가입, 로그인, 게시글 작성, 정보전달',
        url: '',
        github: 'https://github.com/choslion/KibuttzKorea',
        figma: '',
        useSkills: 'HTML, CSS, JavaScript, MySQL, Node.js',
      },
      {
        title: '서울탁주',
        date: '2022.11 ~ 2022.12 (팀프로젝트)',
        img: require(`../../public/img/seoulTakjuMain.png`),
        introduce:
          '첫 팀프로젝트 입니다. 팀의 조장을 맡아 여러 사람의 의견이 잘 어우러지게 사이트를 제작하였습니다.제가 맡은 부분은 메인페이지, 카카오맵 Api를 받아 지도 가져오기 그리고 MySQL을 node.js 와 연동해 DB의 정보를 가져올 수 있는 게시판을 만들었습니다. 또한 git을 이용해 데이터를 주고 받아보는 경험을 하였습니다.',
        feeling: '의견조율, 소통의 중요성에 대해 알게 되었습니다.',
        contribution: '33.33%',
        mainFunc: '회원가입, 로그인, 게시글 작성, 정보전달',
        url: 'http://codebuild-seoultakju-service-role.ap-northeast-1.elasticbeanstalk.com/',
        github: 'https://github.com/choslion/seoulTakju-personal',
        figma: '',
        useSkills: 'HTML, CSS, JavaScript, MySQL, Node.js',
      },
      {
        title: '승혁의 유튜브',
        date: '2022.12 ~ 2022.2 (개인프로젝트)',
        img: require(`../../public/img/kibuttzMain.png`),
        introduce: '노마드코더의 유튜브 클론코딩 수업을 들으며 Pug, Mongo, ES6에 대해 알게 되고 미약하게나마 연습해본 사이트 이다.',
        feeling: '템플릿끼리 문법은 비슷한게 많구나 라고 생각하였고 ',
        contribution: '100%',
        mainFunc: '사용자 인증, 게시글 작성, 댓글 작성, 동영상 재생, 동영상 및 사용자 프로필 수정',
        url: '',
        github: 'https://github.com/choslion/wetube',
        figma: '',
        useSkills: 'Pug, Mongo, ES6',
      },
    ];
    return {
      projectModuel,
    };
  },
};
</script>
<style scoped></style>
