import { createCanvas } from "@/utils";
import { MONSTER_A, MONSTER_B, LAYOUT_SIZE } from "@/const";
import { useGlobalStore } from "@/stores";
import { useMap } from "./map";
import { useMonster } from "./monster";

// assets
const monsterPresets = [MONSTER_A, MONSTER_B];

export default function useLayout() {
    const global = useGlobalStore();
    const { initMap, dragMap } = useMap();
    const { createMonster, dragMonster } = useMonster();

    /**
     * 初始化
     */
    async function init() {
        // 初始化全局画布
        global.layoutContext = createCanvas(LAYOUT_SIZE).getContext(
            "2d"
        ) as CanvasRenderingContext2D;
        global.layoutSize = LAYOUT_SIZE;
        document
            .querySelector(".layout")
            ?.appendChild(global.layoutContext.canvas);

        // 地图初始化
        global.gameMap = await initMap();

        // 敌人初始化
        const monsterList = await Promise.all(
            monsterPresets.map(createMonster)
        );
        global.monsterList = new Set(monsterList);
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
            dragMonster();

            requestAnimationFrame(draw);
        };

        draw();
    }

    return { init, run };
}
