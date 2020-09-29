<template>
    <div class="songSheetList">
        <div class="imgBox">
            <img :src="data.picUrl" alt="">
        </div>
        <p class="text">{{data.name}}</p>
        <div class="playNum" v-if="data.playCount">
            <span class="iconfont icon-icon-"></span>
            {{transPlayCount(data.playCount)}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object,
    },
    methods: {
        transPlayCount(num) {
            return this.$utils.getCompany(num);
        }
    }
}
</script>

<style lang="less" scoped>
@width: 1rem;
.imgBox {
    width: 100%;
    height: @width;
    border-radius: .06rem;
    overflow: hidden;

    img {
        width: 100%;
    }
}

.text {
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.songSheetList {
    width: @width;
    font-size: .12rem;
    position: relative;
}

.playNum {
    @margin: .04rem;
    position: absolute;
    right: @margin;
    top: @margin;
    color: #fff;
}
</style>