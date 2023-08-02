import { GameMap, Monster, Tower } from "@/service";
import { loadImage, readAllSprite, createCanvas } from "@/utils";
import { MAP_DATA, MONSTER_A, MONSTER_B, LAYOUT_SIZE } from "@/const";
import { useGlobalStore } from "@/stores";

// assets
import roadImg from "@/assets/road.jpg";

const monsterPresets = [MONSTER_A];

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

        // 敌人初始化
        global.monsterList = await Promise.all(
            monsterPresets.map(createMonster)
        );
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

    /**
     * ----地图----
     */
    /**
     * 地图初始化
     */
    async function initMap() {
        const mapAssets = await loadImage(roadImg);
        const gameMap = new GameMap(MAP_DATA, mapAssets);
        gameMap.draw();

        return gameMap;
    }
    function dragMap() {
        const mapCtx = global.gameMap.context;
        global.layoutContext.drawImage(mapCtx.canvas, 0, 0);
    }

    /**
     * ----敌人----
     */
    /**
     * 敌人初始化
     */
    async function createMonster(data: typeof MONSTER_A): typeof Monster {
        const { speed, blood, position, assets } = data;
        const { url, width, height, col, row } = assets;

        const springImages = await readAllSprite(url, col, row, width, height);
        const monster = new Monster(speed, blood, position, springImages, {
            width,
            height,
        });
        return monster;
    }

    function dragMonster() {
        global.monsterList.map((monster) => {
            const nextMapItem =
                global.gameMap.mapData[monster.position.index + 1];

            if (!nextMapItem) {
            }

            monster.drawMonster(nextMapItem);
            global.layoutContext.drawImage(monster.context.canvas, 0, 0);
        });
    }

    return { init, run };
}
