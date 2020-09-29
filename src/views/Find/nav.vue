<template>
    <div class="find-nav">
        <div class="find-nav-item" v-for="item in navs" :key="item.text">
            <div class="find-nav-icon">
                <span class="iconfont" :class="item.icon"></span>
                <span class="find-nav-text" v-if="item.iconText">
                    {{item.iconText}}
                </span>
            </div>
            <div class="find-nav-title">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                {
                    title: "每日推荐",
                    icon: "icon-calendar-",
                    iconText: "29",
                },
                {
                    title: "歌单",
                    icon: "icon-gedan",
                },
                {
                    title: "排行榜",
                    icon: "icon-PCbofangye_paihangbang",
                },
                {
                    title: "电台",
                    icon: "icon-diantai",
                },
                {
                    title: "直播",
                    icon: "icon-zhibo",
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.find-nav {
    display: flex;
    justify-content: space-between;
    padding: .2rem 0;
    border-bottom: solid 1px #ddd;
    font-size: .12rem;
    text-align: center;
}

.find-nav-icon {
    @height: .5rem;
    margin-bottom: .06rem;
    width: @height;
    height: @height;
    background-color: red;
    color: #fff;
    text-align: center;
    line-height: @height;
    position: relative;
    border-radius: 50%;

    .iconfont {
        font-size: .3rem;
    }
}

.find-nav-text {
    position: absolute;
    left: 50%;
    top: 58%;
    transform: translate(-50%, -50%);
}
</style>