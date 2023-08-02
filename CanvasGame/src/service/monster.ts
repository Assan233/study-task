import type { MonsterPosition, Size } from "@/type/monster";
import { LAYOUT_SIZE, MAP_ITEM_SIZE } from "@/const";
import { createCanvas } from "@/utils";

export class Monster {
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
    // 实例内图层
    context: CanvasRenderingContext2D = null!;
    // 在地图中格子的位置
    position: MonsterPosition = {
        // 格子的索引位置
        index: 0,
        x: 0,
        y: 0,
    };

    constructor(
        speed: number,
        blood: number,
        position: MonsterPosition,
        images: HTMLCanvasElement[],
        springItemSize: Size
    ) {
        this.speed = speed;
        this.blood = blood;
        this.position = position;
        this.springImages = images;
        this.springItemSize = springItemSize;
        this.context = createCanvas(LAYOUT_SIZE).getContext("2d");
    }

    /**
     * 怪物绘制api (包含动画的绘制)
     */
    drawMonster() {
        // 每一帧播放时间间隔
        const timeSpace = 200;

        if (Date.now() - this.springDate > timeSpace) {
            // 先清空画布
            this.context.clearRect(0, 0, LAYOUT_SIZE.width, LAYOUT_SIZE.height);

            // 渲染帧
            const { x, y } = this.position;
            const offsetX = MAP_ITEM_SIZE / 2 - this.springItemSize.width / 2;
            const offsetY = MAP_ITEM_SIZE / 2 - this.springItemSize.height / 2;
            this.context.drawImage(
                this.springImages[this.springIndex],
                x + offsetX,
                y + offsetY
            );
            this.springIndex = ++this.springIndex % this.springImages.length;

            // 重置
            this.springDate = Date.now();
        }
    }

    /**
     * 承伤api
     */
    damage(damage: number) {}

    /**
     * 移动到指定位置 (包含动画的绘制)
     * @param {string} position: 位置信息
     */
    move(position: MonsterPosition) {}
}
