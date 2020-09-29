<template>
    <div class="_list">
        <div class="_list-title">
            <slot name="title">
                <h3>{{title}}</h3>
            </slot>
            <slot name="link">
                <div class="linkOpst" v-if="typeof link === 'string'">{{link}}</div>
            </slot>
        </div>
        <div class="_list-content">
            <slot>
                <template v-if="data">
                    <SongSheetList v-for="item in data" :data="item" :key="item.name"></SongSheetList>
                </template>
            </slot>
        </div>
    </div>
</template>

<script>
import SongSheetList from "./songSheetList";
export default {
    props: {
        title: String,
        link: [String, Object],
        data: Array,
    },
    components: {
        SongSheetList,
    }
}
</script>

<style lang="less" scoped>
._list-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.linkOpst {
    padding: .02rem .08rem;
    border: solid .01rem #999;
    border-radius: .1rem;
    font-size: .12rem;
}

._list-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>