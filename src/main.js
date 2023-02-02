import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faKey, faRightLong, faBars, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFigma, faAws, faInstagram } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faKey, faRightLong, faGithub, faFigma, faAws, faInstagram, faBars, faCircleXmark, faCheck);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyB_ZmBeICoUT369rnsNhyAdvf8AvD835mg",
//   authDomain: "eddyportfolio-bd0bf.firebaseapp.com",
//   projectId: "eddyportfolio-bd0bf",
//   storageBucket: "eddyportfolio-bd0bf.appspot.com",
//   messagingSenderId: "429691275089",
//   appId: "1:429691275089:web:6be33a65f14dc2d39b7570",
//   measurementId: "G-QVFWK7E3CH"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
