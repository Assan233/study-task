import { GameMap, Monster, Tower } from "@/service";
import { loadImage, readAllSprite, createCanvas } from "@/utils";
import { MAP_DATA, MONSTER_A, LAYOUT_SIZE } from "@/const";
import { useGlobalStore } from "@/stores";

// assets
import roadImg from "../assets/road.jpg";
import monsterSpringA from "../assets/monster_0.png";

export default function useInit() {
    const global = useGlobalStore();

    /**
     * 初始化
     */
    async function init() {
        // 初始化全局画布
        global.layoutContext = createCanvas(LAYOUT_SIZE).getContext("2d");
        global.layoutSize = LAYOUT_SIZE;
        document
            .querySelector(".layout")
            ?.appendChild(global.layoutContext.canvas);

        // 地图初始化
        global.gameMap = await initMap();
    }

    /**
     * 渲染地图/敌人/攻击塔
     */
    function run() {
        // 清空全局画布
        global.layoutContext.clearRect(
            0,
            0,
            global.layoutSize.width,
            global.layoutSize.height
        );

        // 绘制地图
        const mapCtx = global.gameMap.context;
        global.layoutContext.drawImage(mapCtx.canvas, 0, 0);

        initMonster();
    }

    /**
     * 地图初始化
     */
    async function initMap() {
        const mapAssets = await loadImage(roadImg);
        const gameMap = new GameMap(MAP_DATA, mapAssets);
        gameMap.draw();

        return gameMap;
    }

    /**
     * 敌人初始化
     */
    async function initMonster() {
        const springImages = await readAllSprite(monsterSpringA, 2, 2, 32, 32);
        const monster = new Monster(
            MONSTER_A.speed,
            MONSTER_A.blood,
            MONSTER_A.position,
            springImages
        );

        monster.drawMonster();
    }

    return { init, run };
}
