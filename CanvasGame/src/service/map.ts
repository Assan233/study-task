import { IPosition } from "./type/map";

const MAP_SIZE = {
    width: 1200,
    height: 900,
}
const ITEM_SIZE = 8

export class GameMap {
    size = MAP_SIZE;
    itemSize = ITEM_SIZE;
    mapData: IPosition[] = [];
    // 路面贴图
    assets: string = ''

    constructor() {

    }


    /**
     * 地图绘制接口
     */
    draw() { }
}