import roadImg from "@/assets/road.jpg";
import { GameMap } from "@/service";
import { MAP_DATA } from "@/const";
import { loadImage } from "@/utils";
import { useGlobalStore } from "@/stores";

export function useMap() {
    const global = useGlobalStore();

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
