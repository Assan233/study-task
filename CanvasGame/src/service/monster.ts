import type { MonsterPosition } from "./type/monster";

export class Monster {
    type: string = '';
    speed: number = 0;
    blood: number = 0;
    // 怪物动画抽帧的雪碧图
    assets: string = '';
    // 在地图中格子的位置
    position: MonsterPosition = {
        // 格子的索引位置
        index: 0,
        x: 0,
        y: 0,
    }

    constructor() {

    }

    /**
     * 怪物绘制api (包含动画的绘制)
     */
    draw() { }

    /**
     * 承伤api
     */
    damage(damage: number) { }

    /**
     * 移动到指定位置 (包含动画的绘制)
     * @param {string} position: 位置信息
     */
    move(position: MonsterPosition) {

    }
}