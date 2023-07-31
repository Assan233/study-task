import { TowerAssets } from "./type/tower";

export class Tower {
    assets: TowerAssets = { tower: '', effect: '', bullet: '' };
    // 攻击范围
    range: number = 0;
    // 伤害
    damage: number = 0;

    constructor() {

    }

    /**
     * 攻击塔绘制
     */
    draw() { }


    /**
     * 攻击目标
     * @param {string} targets:any[]
     */
    attackTargets(targets: any[]) { }

    /**
     * 获取攻击范围内的目标
     * @param {string} targets:any[]
     */
    private getRangeTarget(targets: any[]) { }

    /**
     * 绘制子弹(动画绘制)
     */
    private renderBullet() {

    }
}