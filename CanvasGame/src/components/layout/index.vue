<template>
    <div class="handler">
        <button @click="run">Run</button>
        <button @click="addTower(Tower_A)">Add Tower</button>
    </div>

    <!-- 渲染画布 -->
    <div class="layout"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useLayout from "@/components/layout";
import { Tower_A } from "@/const";

const { init, run, addTower } = useLayout();
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
    padding: 24px;
    background-image: url(@/assets/bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid seagreen;
}
</style>
