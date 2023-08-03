import { TowerAssets, TowerConfig } from "./type/tower";
import { Monster } from "./monster";
import { IPosition } from "./type/map";
import { LAYOUT_SIZE, MAP_ITEM_SIZE } from "@/const";
import { createCanvas, loadImage } from "@/utils";

type IMonster = typeof Monster;

export class Tower {
    // 静态资源
    towerImage: HTMLImageElement = null!;
    bulletImage: HTMLImageElement = null!;
    effectSpringImages: HTMLCanvasElement[] = [];
    // 攻击范围
    range: number = 0;
    // 子弹速度
    speed: number = 0;
    // 伤害
    damage: number = 0;
    // 实例渲染图层
    context: CanvasRenderingContext2D = null!;
    position: IPosition = {
        x: 0,
        y: 0,
    };

    constructor(config: TowerConfig) {
        Object.assign(this, config);
        this.context = createCanvas(LAYOUT_SIZE).getContext(
            "2d"
        ) as CanvasRenderingContext2D;
    }

    /**
     * 开始绘制
     */
    draw() {
        return Promise.all([this.drawTower()]);
    }
    /**
     * 攻击塔绘制
     */
    async drawTower() {
        this.context.drawImage(
            this.towerImage,
            this.position.x,
            this.position.y
        );
    }

    /**
     * 攻击目标
     * @param {string} targets:IMonster[]
     */
    attackTargets(targets: IMonster[]) {}

    /**
     * 获取攻击范围内的目标
     * @param {string} targets:IMonster[]
     */
    private getRangeTarget(targets: IMonster[]) {}

    /**
     * 绘制子弹(动画绘制)
     */
    private renderBullet(target: IMonster) {}

    /**
     * 绘制爆炸特效(动画绘制)
     */
    private renderBoom(target: IMonster) {}
}
