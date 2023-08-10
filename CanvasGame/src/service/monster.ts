import type { MonsterCoord, Size, Coord } from "./type";

import { Base } from "./base";
import { MAP_ITEM_SIZE } from "@/const";
import { calcDirect } from "@/utils";

export class Monster extends Base {
    type: string = "";
    speed: number = 0;
    blood: number = 0;
    currentBlood: number = 0;
    // 敌人已死亡
    finished: boolean = false;

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
        this.currentBlood = blood;
        this.coord = coord;
        this.springImages = images;
        this.springItemSize = springItemSize;
    }

    /**
     * 获取敌人实际的渲染坐标
     * 因为this.coord缓存的是敌人在地图未做居中对齐的坐标
     */
    get computedCoord(): Coord {
        const { x, y } = this.coord;
        const offsetX = MAP_ITEM_SIZE / 2 - this.springItemSize.width / 2;
        const offsetY = MAP_ITEM_SIZE / 2 - this.springItemSize.height / 2;

        return { x: x + offsetX, y: y + offsetY };
    }

    draw(nextMapItem: Omit<MonsterCoord, "index">) {
        this.drawMonster(nextMapItem);
        this.drawBlood();
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
     * 绘制血条
     */
    drawBlood() {
        const bloodSize = {
            // 血条实际长度 *0.3的系数
            width: this.blood * 0.3,
            height: 4,
        };
        const coord = {
            x:
                this.computedCoord.x +
                (this.springItemSize.width - bloodSize.width) / 2,
            y: this.computedCoord.y - bloodSize.height * 2,
        };

        // 血条背景色
        this.context.fillStyle = "#45031a";
        this.context.fillRect(
            coord.x,
            coord.y,
            bloodSize.width,
            bloodSize.height
        );

        // 血条颜色
        this.context.fillStyle = "#ff4a3b";
        const bloodWidth = (this.currentBlood / this.blood) * bloodSize.width;
        this.context.fillRect(coord.x, coord.y, bloodWidth, bloodSize.height);
    }

    /**
     * 承伤api
     */
    damage(damage: number) {
        this.currentBlood -= damage;
    }

    finish() {
        this.finished = true;
    }
}
