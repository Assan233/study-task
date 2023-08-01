<template>
    <div>
        <button class="btn-run" @click="run">run</button>
        <button class="btn-pause">pause</button>
    </div>
    <div class="layout"></div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { run } from "../components/index";
</script>

<style scoped>
.layout {
    min-width: 1200px;
    min-height: 900px;
    padding: 24px;
    background-image: url(../assets/bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid seagreen;
}
</style>
