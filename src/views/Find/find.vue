<template>
    <div class="find _box">
        <Slide height="1.5rem">
            <SlideItem class="red">1</SlideItem>
            <SlideItem class="blue">2</SlideItem>
            <SlideItem class="green">3</SlideItem>
        </Slide>
        <Nav />
        <SongSheet />
    </div>
</template>

<script>
import Slide from "@components/Slide/slide";
import SlideItem from "@components/Slide/slide-item";
import Nav from "./nav";
import SongSheet from "./songSheet";
export default {
    components: {
        Slide,
        SlideItem,
        Nav,
        SongSheet,
    }
}
</script>

<style lang="less" scoped>
.red {
    background-color: red;
}
.blue {
    background-color: blue;
}
.green {
    background-color: green;
}

.find {
    @padding: .2rem;
    box-sizing: border-box;
    padding: @padding @padding 0 @padding;
}

._slide {
    color: #fff;
    text-align: center;
}
</style>