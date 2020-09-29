<template>
    <header>
        <div class="menu">
            <span class="iconfont icon-caidan"></span>
        </div>
        <div class="nav">
            <router-link 
            v-for="item in navList" 
            :key="item.text" 
            :to="item.href">
                {{item.text}}
            </router-link>
        </div>
        <div class="search">
            <span class="iconfont icon-sousuo"></span>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    text: "我的",
                    href: "/home",
                },
                {
                    text: "发现",
                    href: "/find",
                },
                {
                    text: "朋友",
                    href: "/friend",
                },
                {
                    text: "视频",
                    href: "/video",
                },
            ],
        }
    }
}
</script>

<style lang="less" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: .5rem;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 .2rem;
    position: fixed;
    z-index: 10;
    width: 100%;
}

.nav {
    font-size: .14rem;

    a {
        margin: 0 .04rem;
        color: #999;
    }

    a.router-link-exact-active, a.router-link-active {
        font-size: .16rem;
        color: #333;
        font-weight: 600;
    }
}

.iconfont {
    font-size: .14rem;
}
</style>