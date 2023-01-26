import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faKey, faRightLong, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFigma, faAws, faInstagram } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faKey, faRightLong, faGithub, faFigma, faAws, faInstagram, faBars);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
