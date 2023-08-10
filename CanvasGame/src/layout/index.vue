<template>
    <div class="handler">
        <button @click="play">Run</button>
    </div>

    <!-- 渲染画布 -->
    <div class="layout">
        <!-- 画布 -->
        <canvas @click="onClickLayout"></canvas>
        <!-- 防御塔菜单 -->
        <TowerMenu :visible="global.menuVisible" @build="onBuild" />
    </div>
</template>

<script setup lang="ts">
import TowerMenu from "@/components/menu/index.vue";
import useLayout from "./index";

const { play, onBuild, onClickLayout, global } = useLayout();
</script>

<style scoped>
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
}
</style>
