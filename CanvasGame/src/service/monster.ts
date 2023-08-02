import type { MonsterPosition } from "@/type/monster";
import { LAYOUT_SIZE } from "@/const";
import { createCanvas } from "@/utils";

export class Monster {
    type: string = "";
    speed: number = 0;
    blood: number = 0;
    // 怪物动画抽帧canvas图集
    springImages: HTMLCanvasElement[] = [];
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
        images: HTMLCanvasElement[]
    ) {
        this.speed = speed;
        this.blood = blood;
        this.position = position;
        this.springImages = images;
        this.context = createCanvas(LAYOUT_SIZE).getContext("2d");
    }

    /**
     * 怪物绘制api (包含动画的绘制)
     */
    drawMonster() {
        let i = 0;
        // 时间间隔
        const timeSpace = 200;
        let current = Date.now();

        const draw = () => {
            if (Date.now() - current > timeSpace) {
                const index = i % this.springImages.length;
                this.context.drawImage(this.springImages[index], 0, 0);
                i++;

                // 重置
                current = Date.now();
            }

            requestAnimationFrame(draw);
        };

        draw();
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
