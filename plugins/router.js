import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', 
    component: () => import('../src/pages/Main/index')
  },
  {
    path: '/about', 
    component: () => import('../src/pages/About/index')
  },
  {
    path: '/project', 
    component: () => import('../src/pages/Project/index')
  },
  {
    path: '/dictionary', 
    component: () => import('../src/pages/Dictionary/index')
  },
  {
    path: '/license', 
    component: () => import('../src/pages/License/index')
  },
  {
    path: '/setting', 
    component: () => import('../src/pages/Setting/index')
  },
];

const Router = new VueRouter({
  mode: 'history',
  routes,
});

export default Router;