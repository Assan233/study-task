import { LAYOUT_SIZE } from "@/const";
import { useGlobalStore } from "@/stores";

import { useMap } from "./map";
import { useMonster } from "./monster";
import { useTower } from "./tower";
import { useMenu } from "./menu";

export default function useLayout() {
    const global = useGlobalStore();
    const { initMap, dragMap } = useMap();
    const { drawMonster, delayAddMonster } = useMonster();
    const { onBuild, drawTowers } = useTower();
    const { onClickLayout } = useMenu();

    /**
     * 初始化
     */
    async function play() {
        global.clear();

        initLayout();
        // 地图初始化
        await initMap();
        // 创建敌人列表
        await delayAddMonster(100);
        // 开始绘制
        draw();
    }

    /**
     * 初始化全局画布
     */
    function initLayout() {
        const canvas = document.querySelector(
            ".layout canvas"
        ) as HTMLCanvasElement;
        canvas.width = LAYOUT_SIZE.width;
        canvas.height = LAYOUT_SIZE.height;
        global.layoutContext = canvas.getContext(
            "2d"
        ) as CanvasRenderingContext2D;
    }

    /**
     * 渲染地图/敌人/攻击塔
     */
    async function draw() {
        // global.clearMonsterList();
        // if (global.monsterList.size === 0) {
        //     await delayAddMonster(8);
        // }

        // 清空全局画布
        global.layoutContext.clearRect(
            0,
            0,
            LAYOUT_SIZE.width,
            LAYOUT_SIZE.height
        );
        // 绘制地图
        dragMap();
        // 绘制敌人
        drawMonster();
        // 绘制防御塔
        drawTowers();

        const timer = requestAnimationFrame(draw);
        global.animationTimer = timer;
    }

    return { play, onBuild, onClickLayout, global };
}
