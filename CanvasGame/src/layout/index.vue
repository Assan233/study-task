<template>
    <!-- 渲染画布 -->
    <div class="layout">
        <!-- 状态栏 -->
        <Status @play="play" />
        <!-- 画布 -->
        <canvas @click="onClickLayout"></canvas>
        <!-- 防御塔菜单 -->
        <TowerMenu :coin="global.coin" :visible="global.menuVisible" @build="onBuild" />
    </div>
</template>

<script setup lang="ts">
import TowerMenu from "@/components/menu/index.vue";
import Status from "@/components/status/index.vue";
import useLayout from "./index";

const { play, onBuild, onClickLayout, global } = useLayout();
</script>

<style scoped lang="less">
.handler {
    display: flex;
    justify-content: center;
}
button {
    margin: 0 16px;
}
.layout {
    position: relative;
    min-width: 1200px;
    min-height: 900px;
    background-image: url(@/assets/bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid seagreen;

    canvas {
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>
