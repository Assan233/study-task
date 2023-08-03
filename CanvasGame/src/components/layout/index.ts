import { createCanvas } from "@/utils";
import { LAYOUT_SIZE } from "@/const";
import { useGlobalStore } from "@/stores";

import { useMap } from "./map";
import { useMonster } from "./monster";
import { useTower } from "./tower";

export default function useLayout() {
    const global = useGlobalStore();
    const { initMap, dragMap } = useMap();
    const { createMonsters, drawMonster } = useMonster();
    const { addTower, drawTowers } = useTower();

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
        global.layoutContext = createCanvas(LAYOUT_SIZE).getContext(
            "2d"
        ) as CanvasRenderingContext2D;
        global.layoutSize = LAYOUT_SIZE;
        document
            .querySelector(".layout")
            ?.appendChild(global.layoutContext.canvas);
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
                global.layoutSize.width,
                global.layoutSize.height
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

    return { init, run, addTower };
}
