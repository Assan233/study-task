<template>
    <div class="handler">
        <button @click="run">Run</button>
    </div>

    <!-- 渲染画布 -->
    <div class="layout">
        <!-- 画布 -->
        <canvas></canvas>
        <!-- 防御塔菜单 -->
        <TowerMenu :visible="menuVisible" @build="onBuild" />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import TowerMenu from "@/components/menu/index.vue";

import useLayout from "./index";

const { init, run, menuVisible, onBuild } = useLayout();
onMounted(() => {
    init();
});
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
    min-width: 1200px;
    min-height: 900px;
    padding: 160px 24px;
    background-image: url(@/assets/bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid seagreen;
}
</style>
