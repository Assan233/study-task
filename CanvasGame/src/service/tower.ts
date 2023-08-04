import type { TowerConfig, IMonster, Coord, IBullet } from "./type";

import { checkInRange } from "@/utils";
import { Bullet } from "./bullet";

import { Base } from "./base";

export class Tower extends Base {
    // 静态资源
    towerImage: HTMLImageElement = null!;
    bulletImage: HTMLImageElement = null!;
    // 爆炸动图效果抽帧canvas图集
    effectSpringImages: HTMLCanvasElement[] = [];

    // 攻击范围-半径
    range: number = 0;
    // 子弹速度
    speed: number = 0;
    // 伤害
    damage: number = 0;
    // 伤害半径
    damageRange: number = 0;
    // 射速-ms
    fireRate: number = 0;
    // 上一次攻击的时间，控制射速需要
    lastAttackTime: number = 0;
    // // 实例渲染图层
    // context: CanvasRenderingContext2D = null!;
    coord: Coord = null!;

    bulletList: IBullet[] = [];
    targetList: Set<IMonster> = new Set();

    constructor(config: TowerConfig) {
        super();
        this.initLayout();

        Object.assign(this, config);
    }

    /**
     * 绘制 防御塔 / 子弹
     * @param {IMonster[]} targets:
     */
    draw(targets: IMonster[]) {
        this.clearLayout();

        // 绘制
        this.drawTower();
        this.addTarget(targets);
        this.attackTargets();
    }

    /**
     * 攻击塔绘制
     */
    drawTower() {
        this.context.drawImage(this.towerImage, this.coord.x, this.coord.y);
    }

    /**
     * 根据攻击范围添加目标
     * @param {string} targets:IMonster[]
     */
    addTarget(targets: IMonster[]) {
        // 每次清空目标列表
        this.targetList = new Set();

        const matchTargets = this.getRangeTarget(targets);
        matchTargets.map((target) => this.targetList.add(target));
    }

    /**
     * 获取攻击范围内的目标
     * @param {string} targets:IMonster[]
     */
    private getRangeTarget(targets: IMonster[]): IMonster[] {
        this.context.arc(
            this.coord.x,
            this.coord.y,
            this.range,
            0,
            Math.PI * 2
        );

        // TODO:test
        this.context.strokeStyle = "red";
        this.context.stroke();

        return targets.filter((target) =>
            checkInRange(this.context, this.coord, target.coord, this.range)
        );
    }

    /**
     * 攻击目标
     */
    attackTargets() {
        // 控制射速
        if (Date.now() - this.lastAttackTime >= this.fireRate) {
            this.addBullet();
            this.lastAttackTime = Date.now();
        }

        // 绘制子弹
        this.drawBullets();
        this.clearBullets();
    }

    /**
     * 根据目标初始化子弹实例
     */
    private addBullet() {
        const bulletList = [...this.targetList].map((target) => {
            const {
                range,
                speed,
                damage,
                bulletImage,
                damageRange,
                effectSpringImages,
            } = this;

            return new Bullet({
                range,
                speed,
                damage,
                damageRange,
                target,
                bulletImage,
                towerCoord: this.coord,
                effectSpringImages,
            });
        });

        this.bulletList = [...this.bulletList, ...bulletList];
    }

    /**
     * 绘制子弹(动画绘制)
     */
    private drawBullets() {
        this.bulletList.forEach((bullet) => {
            bullet.drawBulletOnTower(this.context);
        });
    }

    /**
     * 清理生命周期结束的子弹
     */
    clearBullets() {
        this.bulletList = this.bulletList.filter(
            (bullet) => bullet.lifeCycle !== "finished"
        );
    }
}
