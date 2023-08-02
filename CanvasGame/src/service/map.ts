import { IPosition } from "./type";
import { LAYOUT_SIZE, MAP_ITEM_SIZE } from "@/const";
import { createCanvas } from "@/utils";

export class GameMap {
    size = LAYOUT_SIZE;
    itemSize = MAP_ITEM_SIZE;
    mapData: IPosition[] = [];
    // 路面贴图
    assets: HTMLImageElement = null!;
    // 实例内图层
    context: CanvasRenderingContext2D = null!;

    constructor(mapData: IPosition[], assets: HTMLImageElement) {
        this.assets = assets;
        this.mapData = mapData;
        this.context = createCanvas(this.size).getContext(
            "2d"
        ) as CanvasRenderingContext2D;
    }

    /**
     * 地图绘制接口
     */
    draw() {
        this.mapData.forEach(({ x, y }) => {
            this.context.drawImage(
                this.assets,
                x,
                y,
                this.itemSize,
                this.itemSize
            );
        });
    }
}
