import { IPosition } from "./type/map";

const MAP_SIZE = {
    width: 1200,
    height: 900,
}
const ITEM_SIZE = 80;

export class GameMap {
    size = MAP_SIZE;
    itemSize = ITEM_SIZE;
    mapData: IPosition[] = [];
    // 路面贴图
    assets: HTMLImageElement = null!;
    mapContext: CanvasRenderingContext2D = null!;

    constructor(mapData: IPosition[], assets: HTMLImageElement, layout: CanvasRenderingContext2D) {
        this.assets = assets;
        this.mapData = mapData;
        this.mapContext = layout;
    }


    /**
     * 地图绘制接口
     */
    draw() {
        this.initLayout();

        this.mapData.forEach(({ x, y }) => {
            this.mapContext.drawImage(this.assets, x, y, this.itemSize, this.itemSize);
        })
    }

    initLayout() {
        this.mapContext.canvas.width = this.size.width;
        this.mapContext.canvas.height = this.size.height;
    }
}