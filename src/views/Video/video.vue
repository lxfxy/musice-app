<template>
    <div class="video">
        <div class="video-nav">
            <router-link v-for="item in navs" :key="item.text" :to="`/video${item.href}`">
                {{item.text}}
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                {
                    text: "音乐节",
                    href: "/musicFestival",
                },
                {
                    text: "广告",
                    href: "/scene",
                },
                {
                    text: "听BGM",
                    href: "/listenBGM",
                },
                {
                    text: "娱乐",
                    href: "/singing",
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.video-nav {
    @height: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: @height;
    background-color: #fff;
    border-bottom: solid .01rem #ddd;
    padding-top: .1rem;

    a {
        height: 100%;
        line-height: @height;
        position: relative;
        width: 20%;
        text-align: center;
        color: #333;
    }

    a.router-link-active {
        color: red;
        &::after {
            position: absolute;
            content: "";
            width: 100%;
            bottom: 0;
            left: 0;
            height: .02rem;
            background-color: red;
        }
    }
}
</style>