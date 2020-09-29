// const src = "@views/Home";
const homeIndex = () => import("@views/Home/home.vue");

export default {
    path: "/home",
    component: homeIndex,
};