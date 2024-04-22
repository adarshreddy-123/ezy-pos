import { createRouter, createWebHistory } from 'vue-router';
import HomeRoutes from './components/Pages/HomeModule/HomeModule';
import SettingRoutes from './components/Pages/SettingModule/SettingModule';
// import LoginPage from './components/Pages/LoginPage.vue';
// import SideBar from './components/Pages/SideBar.vue';
// import NavBar from './components/Pages/NavBar.vue';
// import isAuthenticated from './components/Auth/Navigation';

const LoginPage=()=>import('./components/Pages/LoginPage.vue');
const SideBar=()=>import('./components/Pages/SideBar.vue');
const NavBar=()=>import('./components/Pages/NavBar.vue');
const isAuthenticated=()=>import('./components/Auth/Navigation');
// const HomeRoutes=()=>import('./components/Pages/HomeModule/HomeModule');
// const SettingRoutes=()=>import('./components/Pages/SettingModule/SettingModule');

const routes = [
    {
        path:'/',
        name:'Login',
        component:LoginPage,
        props:true,
        meta:{requiresAuth:true}
    },
    {
        path:'/SideBar',
        component:SideBar
    },
    {
        path:'/NavBar', 
        component:NavBar
    },
    ...HomeRoutes,
    ...SettingRoutes
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => !record.meta.requiresAuth)) {
      if (!isAuthenticated()) {
        next({ name: 'Login' });
      } else {
        next();
      }
    } else {
        if(isAuthenticated()){
            next({name:'HomePage'})
        }
        else{
            next();
        }
    }
  });
  
export default router;