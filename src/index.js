import Vue from 'vue';
import store from '../plugins/store';
import router from '../plugins/router'
import App from './App';
import '../public/index.scss';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#root');