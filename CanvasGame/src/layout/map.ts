import roadImg from "@/assets/road.jpg";
import startImg from "@/assets/start.png";
import endImg from "@/assets/end.png";
import buildTowerImg from "@/assets/build_tower.png";
import treeImg from "@/assets/tree.png";
import { GameMap } from "@/service";
import { MAP_DATA, TOWER_MAP_DATA, TREE_MAP_DATA } from "@/const";
import { loadImage, readAllSprite } from "@/utils";
import { useGlobalStore } from "@/stores";

export function useMap() {
    const global = useGlobalStore();

    /**
     * 地图初始化
     */
    async function initMap() {
        const [startAssets, endAssets, roadAssets, towerAssets, treeSpring] =
            await Promise.all([
                loadImage(startImg),
                loadImage(endImg),
                loadImage(roadImg),
                loadImage(buildTowerImg),
                readAllSprite(treeImg, 1, 3, 64, 64),
            ]);
        const gameMap = new GameMap({
            mapData: MAP_DATA,
            towerMapData: TOWER_MAP_DATA,
            treeMapData: TREE_MAP_DATA,
            assets: roadAssets,
            towerMapAssets: towerAssets,
            treeAssets: treeSpring[0],
            startAssets,
            endAssets,
        });

        gameMap.draw();
        global.gameMap = gameMap;
    }

    /**
     * 地图绘制
     */
    function dragMap() {
        const mapCtx = global.gameMap.context;
        global.layoutContext.drawImage(mapCtx.canvas, 0, 0);
    }

    return {
        initMap,
        dragMap,
    };
}
