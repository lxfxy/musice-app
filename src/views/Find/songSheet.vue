<template>
    <div class="songSheet">
        <List title="推荐歌单" link="歌单广场" :data="songSheetLists"/>
    </div>
</template>

<script>
import List from "@components/List/list";
export default {
    data() {
        return {
            songSheetLists: [],
        };
    },
    components: {
        List,
    },
    computed: {
        
    },
    async created() {
        this.songSheetLists = (await this.$api.reqPersonalized(6)).result;
    },
}
</script>