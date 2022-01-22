import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dbUrl: 'https://sanguk-db-default-rtdb.firebaseio.com/portfolio',
    titleName: {browser: '전상욱 포트폴리오', page: 'JSW PORTFOLIO'},
    colors: ['#B71C1C', '#FF6600', '#FFD600', '#00C853', '#338f6c', '#0099FF', '#6200EA', '#FF0084', '#3E2723', '#212121'],
    menus: {
      main: [
        {id: 1, name: 'Home', link: '/', icon: 'fas fa-home'},
        {id: 2, name: 'About', link: '/about', icon: 'far fa-user'},
        {id: 3, name: 'Project', link: '/project', icon: 'fas fa-pencil-alt'},
        {id: 4, name: 'Dictionary', link: '/dictionary', icon: 'fas fa-book'},
        {id: 5, name: 'License', link: '/license', icon: 'far fa-id-card'},
      ],
      sub: [
        {id: 6, name: 'Setting', link: '/setting', icon: 'fas fa-cog'},
      ]
    },
    admin: false,
  },
  mutations: {
    setAdmin: (state, payload) => state.admin = payload,
  },
  actions: {
    setAdmin: ({commit}, payload) => commit('setAdmin', payload),
  },
  getters: {
    
  }
});

export const EventBus = new Vue();

export default store;