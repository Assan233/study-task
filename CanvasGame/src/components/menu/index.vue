<template>
    <div class="menu" v-show="visible">
        <div
            class="menu__item"
            v-for="(build, index) in menuData"
            :style="getStyle(index, build.url)"
            @click="onBuild(build)"
        >
            <span
                class="menu__item__text"
                :style="coin < build.coast ? { color: 'red' } : {}"
                >{{ build.coast }}</span
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { MENU_DATA } from "@/const";
import { ref } from "vue";

type TowerInfo = { type: string; coast: number; url: string };

defineProps<{
    visible: boolean;
    coin: number;
}>();

const emit = defineEmits<{
    (e: "build", info: TowerInfo): void;
}>();

const menuData = ref(MENU_DATA);
function getStyle(index: number, url: string) {
    let result: any = { backgroundImage: `url(${url})` };

    switch (index) {
        case 0:
            result.top = "-26px";
            result.left = "42px";
            break;
        case 1:
            result.top = "42px";
            result.left = "-26px";
            break;
        case 2:
            result.bottom = "-26px";
            result.left = "42px";
            break;
        case 3:
            result.top = "42px";
            result.right = "-26px";
            break;
    }

    return result;
}

function onBuild(info: TowerInfo) {
    emit("build", info);
}
</script>

<style lang="less">
.menu {
    position: absolute;
    width: 135px;
    height: 135px;
    background-image: url(../../assets/menu_0.png);

    &__item {
        display: inline-block;
        position: absolute;
        width: 52px;
        height: 52px;
        cursor: pointer;

        &__text {
            position: absolute;
            bottom: -10px;
            left: 4px;
            display: inline-block;
            width: 45px;
            height: 18px;
            line-height: 19px;
            text-align: center;
            font-size: 12px;
            font-weight: 600;
            color: #fff;
            background-image: url(../../assets/menu_coast.png);
            background-repeat: no-repeat;
            background-size: contain;
            user-select: none;
        }
    }
}
</style>
