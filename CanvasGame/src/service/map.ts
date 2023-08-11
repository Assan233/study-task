import type { Coord, MapConfig } from "./type";
import { LAYOUT_SIZE, MAP_ITEM_SIZE } from "@/const";
import { createCanvas } from "@/utils";

export class GameMap {
    size = LAYOUT_SIZE;
    itemSize = MAP_ITEM_SIZE;

    // 地图数据
    mapData: Coord[] = [];
    towerMapData: Coord[] = [];
    treeMapData: Coord[] = [];

    // 路面贴图
    assets: HTMLImageElement = null!;
    // 防御塔占位贴图
    towerMapAssets: HTMLImageElement = null!;
    treeAssets: HTMLCanvasElement = null!;
    startAssets: HTMLImageElement = null!;
    endAssets: HTMLImageElement = null!;

    // 实例渲染图层
    context: CanvasRenderingContext2D = null!;

    constructor(config: MapConfig) {
        Object.assign(this, config);

        this.context = createCanvas(this.size).getContext(
            "2d"
        ) as CanvasRenderingContext2D;
    }

    /**
     * 地图绘制接口
     */
    draw() {
        // 绘制地图路径
        this.mapData.forEach(({ x, y }) => {
            this.context.drawImage(
                this.assets,
                x,
                y,
                this.itemSize,
                this.itemSize
            );
        });

        // 绘制地图防御塔占位贴图
        this.towerMapData.forEach(({ x, y }) => {
            this.context.drawImage(
                this.towerMapAssets,
                x,
                y,
                this.itemSize,
                this.itemSize
            );
        });

        // 树木绘制
        this.treeMapData.forEach(({ x, y }) => {
            this.context.drawImage(this.treeAssets, x, y);
        });

        // 绘制起终点
        const start = this.mapData[0];
        const end = this.mapData[this.mapData.length - 1];
        this.context.drawImage(this.startAssets, start.x, start.y + 10, 40, 40);
        this.context.drawImage(this.endAssets, end.x, end.y + 10, 40, 40);

        // TODO: test
        // this.mapData.forEach(({ x, y }, index) => {
        //     this.context.strokeRect(x, y, this.itemSize, this.itemSize);
        //     this.context.stroke();
        //     this.context.fillText(`${index}`, x + 10, y+10);
        // });
    }
}
