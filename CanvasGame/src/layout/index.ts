import { LAYOUT_SIZE } from "@/const";
import { useGlobalStore } from "@/stores";

import { useMap } from "./map";
import { useMonster } from "./monster";
import { useTower } from "./tower";

export default function useLayout() {
    const global = useGlobalStore();
    const { initMap, dragMap } = useMap();
    const { createMonsters, drawMonster } = useMonster();
    const { onBuild, drawTowers, menuVisible } = useTower();

    /**
     * 初始化
     */
    async function init() {
        initLayout();

        // 地图初始化
        global.gameMap = await initMap();
        // 创建敌人列表
        global.monsterList = await createMonsters();
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
    function run() {
        const draw = () => {
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

            requestAnimationFrame(draw);
        };

        draw();
    }

    return { init, run, onBuild, menuVisible };
}
