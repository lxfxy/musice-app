// const src = "@views/Friend";
const friendIndex = () => import(`@views/Friend/friend.vue`);

export default {
    path: "/friend",
    component: friendIndex,
}