<template>
    <div 
    class="_slide"
    :style="{
        height: height,
    }">
        <div 
        class="_slide-content"
        ref="content">
            <slot v-if="$slots.default"></slot>
            <template v-else>
                <SlideItem>
                    轮播图
                </SlideItem>
            </template>
        </div>
        <ul class="_slide-index">
            <li v-for="item in itemLength - 1" :key="item" :class="{
                active: item - 1 === curIndex,
            }"></li>
        </ul>
    </div>
</template>

<script>
import SlideItem from "./slide-item";
export default {
    props: {
        height: {
            type: String,
            default: "2rem"
        }
    },
    data() {
        return {
            transitionTime: .3,
            index: 0,
            moveWidth: null,
            itemLength: 1,
            moveInterval: null,
            runTime: 2000,
            curIndex: 0,
        }
    },
    components: {
        SlideItem,
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let box = this.$refs.content;
            let el = box.children[0].cloneNode(true);
            this.itemLength = box.children.length + 1;
            this.setStyle();
            this.moveWidth = box.children[0].clientWidth;
            this.run(true);
            box.appendChild(el);
            box.addEventListener("transitionend", () => {
                if (this.index === this.itemLength - 1) {
                    this.transitionTime = 0;
                    this.index = 0;
                    this.setStyle();
                    this.move();
                    let time = setTimeout(() => {
                        this.transitionTime = .3;
                        this.setStyle();
                    }, 300);
                };
            });
        },

        move() {
            let box = this.$refs.content;
            box && (box.style.transform = `translateX(-${this.index * this.moveWidth + this.index}px)`);
        },
        
        run(flag) {
            if (flag) {
                if (this.moveInterval !== null) return;
                this.moveInterval = setInterval(() => {
                    this.index = (this.index + 1) % this.itemLength;
                    this.curIndex = (this.curIndex + 1) % (this.itemLength - 1);
                    this.move();
                }, this.runTime);
            } else {
                clearInterval(this.moveInterval);
                this.moveInterval = null;
            }
        },
        
        setStyle(type = "transform", mode = "ease-in-out") {
            let box = this.$refs.content;
            box.style.transitionProperty = type;
            box.style.transitionDuration = `${this.transitionTime}s`;
            box.style.transitionTimingFunction = mode;
        },
        
        computedIndex() {
            this.index = (this.index + 1) % this.itemLength;
            this.curIndex = (this.curIndex + 1) % (this.itemLength - 1);
        },
    }
}
</script>

<style lang="less" scoped>
._slide {
    overflow: hidden;
    position: relative;
    border-radius: .1rem;
}

._slide-content {
    white-space: nowrap;
    height: 100%;
    & > * {
        width: 100%;
        display: inline-block;
        height: 100%;
    }
}

._slide-index {
    position: absolute;
    display: flex;
    bottom: .1rem;
    left: 50%;
    transform: translateX(-50%);

    li {
        padding: .04rem;
        background-color: rgb(255, 255, 255);
        margin: 0 .05rem;
        border-radius: 50%;
        opacity: .5;
    }

    li.active {
        opacity: 1;
    }
}
</style>