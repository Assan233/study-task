<template>
    <div>
        <button class="btn-run" @click="run">Run</button>
        <button class="btn-add" @click="addTower(Tower_A)">Add Tower</button>
    </div>
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
