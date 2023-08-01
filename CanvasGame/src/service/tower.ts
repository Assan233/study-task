import { TowerAssets } from "./type/tower";
import { Monster } from "./monster";
import { IPosition } from "./type/map";

type IMonster = typeof Monster;

export class Tower {
    assets: TowerAssets = { tower: '', effect: '', bullet: '' };
    // 攻击范围
    range: number = 0;
    // 伤害
    damage: number = 0;
    position: IPosition = {
        x: 0,
        y: 0,
    }

    constructor() {

    }

    /**
     * 攻击塔绘制
     */
    draw() { }


    /**
     * 攻击目标
     * @param {string} targets:IMonster[]
     */
    attackTargets(targets: IMonster[]) { }

    /**
     * 获取攻击范围内的目标
     * @param {string} targets:IMonster[]
     */
    private getRangeTarget(targets: IMonster[]) { }

    /**
     * 绘制子弹(动画绘制)
     */
    private renderBullet(target: IMonster) {

    }

    /**
     * 绘制爆炸特效(动画绘制)
     */
    private renderBoom(target: IMonster) {

    }
}