import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./home";
import Friend from "./friend";
import Find from "./find";
import Video from "./video";

Vue.use(VueRouter)

const routes = [
  Home,
  Friend,
  Find,
  Video,
  {
    path: "*",
    redirect: "/find",
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
