import { GameMap } from "../service/map";
import { loadImage } from "../utils/index";
import roadImg from '../assets/road.jpg'

const MAP_DATA = [
    { x: 0, y: 150 },
    { x: 80 * 1, y: 150 },
    { x: 80 * 2, y: 150 },
    { x: 80 * 3, y: 150 },
    { x: 80 * 4, y: 150 },
    { x: 80 * 5, y: 150 },
    { x: 80 * 6, y: 150 },
    { x: 80 * 7, y: 150 },
    { x: 80 * 8, y: 150 },
    { x: 80 * 8, y: 150 + 80 * 1 },
    { x: 80 * 8, y: 150 + 80 * 2 },
    { x: 80 * 8, y: 150 + 80 * 3 },
    { x: 80 * 8, y: 150 + 80 * 4 },
]


export function run() {
    const layout = document.createElement('canvas');
    document.querySelector('.layout')?.appendChild(layout);
    const layoutCtx = layout.getContext('2d') as CanvasRenderingContext2D;

    initMap(layoutCtx)
}

/**
 * 地图初始化
 * @param {string} layout:CanvasRenderingContext2D
 */
async function initMap(layout: CanvasRenderingContext2D) {
    const mapAssets = await loadImage(roadImg)
    const gameMap = new GameMap(MAP_DATA, mapAssets, layout);
    gameMap.draw()
}
