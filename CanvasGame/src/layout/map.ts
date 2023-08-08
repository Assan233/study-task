import roadImg from "@/assets/road.jpg";
import buildTowerImg from "@/assets/build_tower.png";
import { GameMap } from "@/service";
import { MAP_DATA, TOWER_MAP_DATA } from "@/const";
import { loadImage } from "@/utils";
import { useGlobalStore } from "@/stores";

export function useMap() {
    const global = useGlobalStore();

    /**
     * 地图初始化
     */
    async function initMap() {
        const [roadAssets, towerAssets] = await Promise.all([
            loadImage(roadImg),
            loadImage(buildTowerImg),
        ]);
        const gameMap = new GameMap({
            mapData: MAP_DATA,
            towerMapData: TOWER_MAP_DATA,
            assets: roadAssets,
            towerMapAssets: towerAssets,
        });

        gameMap.draw();
        return gameMap;
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
