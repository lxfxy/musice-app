// const src = "@views/Find";
const findIndex = () => import(`@views/Find/find.vue`);

export default {
    path: "/find",
    component: findIndex,
}