import type { MonsterCoord, Size } from "./type";

import { Base } from "./base";
import { MAP_ITEM_SIZE } from "@/const";
import { calcDirect } from "@/utils";

export class Monster extends Base {
    type: string = "";
    speed: number = 0;
    blood: number = 0;
    // 怪物动画抽帧canvas图集
    springImages: HTMLCanvasElement[] = [];
    // 当前播放雪碧图index
    springIndex: number = 0;
    // 缓存播放帧的时间
    springDate: number = 0;
    springItemSize: Size = null!;
    // // 实例渲染图层
    // context: CanvasRenderingContext2D = null!;
    // 在地图中格子的位置
    coord: MonsterCoord = {
        // 格子的索引位置
        index: 0,
        x: 0,
        y: 0,
    };

    constructor(
        speed: number,
        blood: number,
        coord: MonsterCoord,
        images: HTMLCanvasElement[],
        springItemSize: Size
    ) {
        super();
        this.initLayout();

        this.speed = speed;
        this.blood = blood;
        this.coord = coord;
        this.springImages = images;
        this.springItemSize = springItemSize;
    }

    /**
     * 怪物绘制api (包含动画的绘制)
     * @param {Omit<MonsterCoord,'index'>} nextCoord: 下一个地图单元格的坐标，用来判断下一步的运动方向
     */
    drawMonster(nextMapItem: Omit<MonsterCoord, "index">) {
        // 每一帧播放时间间隔
        const timeSpace = 150;

        if (Date.now() - this.springDate > timeSpace) {
            // 先清空画布
            this.clearLayout();

            // 渲染帧
            this.calcCoord(nextMapItem);
            const { x, y } = this.coord;
            const offsetX = MAP_ITEM_SIZE / 2 - this.springItemSize.width / 2;
            const offsetY = MAP_ITEM_SIZE / 2 - this.springItemSize.height / 2;

            this.context.drawImage(
                this.springImages[this.springIndex],
                x + offsetX,
                y + offsetY
            );
            this.springIndex = ++this.springIndex % this.springImages.length;

            // TODO: test
            // this.context.strokeRect(
            //     x + offsetX,
            //     y + offsetY,
            //     this.springItemSize.width,
            //     this.springItemSize.height
            // );
            // this.context.stroke();

            // 重置
            this.springDate = Date.now();
        }
    }

    /**
     * 通过下一个地图单元格的坐标，计算coord
     * @param {MonsterCoord} nextMapItem:
     */
    calcCoord(nextMapItem: Omit<MonsterCoord, "index">): MonsterCoord {
        const direct = calcDirect(this.coord, nextMapItem);

        switch (direct) {
            case "left":
                this.coord.x -= this.speed;
                if (this.coord.x <= nextMapItem.x + MAP_ITEM_SIZE) {
                    this.coord.index += 1;
                }
                break;
            case "right":
                this.coord.x += this.speed;
                if (this.coord.x >= nextMapItem.x) {
                    this.coord.index += 1;
                }
                break;
            case "top":
                this.coord.y -= this.speed;
                if (this.coord.y <= nextMapItem.y + MAP_ITEM_SIZE) {
                    this.coord.index += 1;
                }
                break;
            case "bottom":
                this.coord.y += this.speed;
                if (this.coord.y >= nextMapItem.y) {
                    this.coord.index += 1;
                }
                break;
        }

        return this.coord;
    }

    /**
     * 承伤api
     */
    damage(damage: number) {}

    /**
     * 移动到指定位置 (包含动画的绘制)
     * @param {string} coord: 位置信息
     */
    move(coord: MonsterCoord) {}
}
