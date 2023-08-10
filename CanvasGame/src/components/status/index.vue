<template>
    <div class="status">
        <div class="status__left">
            <div
                class="status__left__item"
                v-for="item in status"
                :key="item.url"
                :style="{ backgroundImage: `url(${item.url})` }"
            >
                <span>{{ item.value }}</span>
            </div>
        </div>

        <div class="status__right">
            <div class="play"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from "@/stores";
const global = useGlobalStore();
import playImage from "@/assets";

import { STATUS_IMAGES } from "@/const";
const status = [
    {
        url: STATUS_IMAGES[0],
        value: global.coin,
    },
    {
        url: STATUS_IMAGES[1],
        value: global.blood,
    },
    {
        url: STATUS_IMAGES[2],
        value: global.killed,
    },
];
</script>
<style scoped lang="less">
.status {
    margin: 16px;
    text-align: left;
    display: flex;
    justify-content: space-between;

    &__left {
        &__item {
            width: 102px;
            height: 50px;
            line-height: 50px;
            padding-right: 8px;
            display: inline-block;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            margin-right: 12px;
            text-align: right;

            span {
                color: #540a21;
                font-size: 18px;
                font-weight: 600;
            }
        }
    }

    &__right {
        .play {
            width: 50px;
            height: 50px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url("../../assets/play.png");
            cursor: pointer;
        }
    }
}
</style>
