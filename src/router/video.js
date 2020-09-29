// const src = "@views/Video";
const videoIndex = () => import(`@views/Video/video.vue`); // 视频
const musicFestival = () => import("@views/Video/musicFestival.vue"); // 音乐节
const scene = () => import("@views/Video/scene.vue"); // 广告
const listenBGM = () => import("@views/Video/listenBGM.vue"); // 听BGM
const singing = () => import("@views/Video/singing.vue"); // 娱乐

export default {
    path: "/video",
    component: videoIndex,
    redirect: "/video/musicFestival",
    children: [
        {
            path: "musicFestival",
            component: musicFestival,
        },
        {
            path: "scene",
            component: scene,
        },
        {
            path: "listenBGM",
            component: listenBGM,
        },
        {
            path: "singing",
            component: singing,
        },
    ]
}
