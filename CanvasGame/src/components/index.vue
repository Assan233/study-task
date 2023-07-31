<template>
    <div>
        <button class="btn-run" @click="run">run</button>
        <button class="btn-pause">pause</button>
    </div>
    <hr />
    <canvas width="1000" height="600" id="renderLayout"></canvas>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { run } from "../demo.ts";
</script>

<style scoped>
#renderLayout {
    border: 1px solid seagreen;
}
</style>
