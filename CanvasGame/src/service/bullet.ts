import type { IMonster, BulletConfig, Coord, LifeCycle } from "./type";
import { inRange } from "lodash";
import { calcMoveCoord } from "@/utils";
import { MAP_ITEM_SIZE } from "@/const";

export class Bullet {
    // 攻击范围
    range: number = 0;
    // 子弹速度
    speed: number = 0;
    // 伤害
    damage: number = 0;
    damageRange: number = 0;
    // 记录当前子弹位置
    currentCoord: Coord = null!;
    // 子弹的生命周期
    lifeCycle: LifeCycle = "flying";

    /**
     * 这里绑定Monster的原因是，在子弹飞行时间内，Monster位置会变化，
     * 绑定Monster可以在每次绘制帧时获取Monster实时位置，保证落点准确
     */
    target: IMonster = null!;
    bulletImage: HTMLImageElement = null!;
    // 爆炸动图效果抽帧canvas图集
    effectSpringImages: HTMLCanvasElement[] = [];
    // 当前播放雪碧图index
    springIndex: number = -1;
    // 缓存播放帧的时间
    springDate: number = 0;

    constructor(config: BulletConfig) {
        Object.assign(this, config);
        this.currentCoord = { ...config.towerCoord };
    }

    get targetCoord() {
        return this.target.coord;
    }
    get targetSpeed() {
        return this.target.speed;
    }

    /**
     * 基于 防御塔画布 绘制子弹
     * @param {CanvasRenderingContext2D} context: 防御塔画布
     */
    drawBulletOnTower(context: CanvasRenderingContext2D) {
        const targetCoord = {
            x: this.targetCoord.x + this.target.springItemSize.width / 2,
            y: this.targetCoord.y + this.target.springItemSize.height / 2,
        };
        const offset = calcMoveCoord(
            this.speed,
            this.currentCoord,
            targetCoord
        );
        this.currentCoord = {
            x: (this.currentCoord.x += offset.x),
            y: (this.currentCoord.y += offset.y),
        };

        /**
         * 子弹到达终点
         */
        const isReach = inRange(Math.abs(offset.distance), 0, this.targetSpeed);
        if (isReach) {
            this.turnCycle("booming");
        }

        // 绘制子弹 or 爆炸特效
        switch (this.lifeCycle) {
            case "flying":
                this.drawBullet(context);
                break;
            case "booming":
                this.drawEffect(context);
                break;
        }
    }
    /**
     *  绘制子弹
     * @param {CanvasRenderingContext2D} context: 防御塔画布
     */
    drawBullet(context: CanvasRenderingContext2D) {
        const bulletSize = 20;
        context.drawImage(
            this.bulletImage,
            this.currentCoord.x,
            this.currentCoord.y,
            bulletSize,
            bulletSize
        );
    }
    /**
     *  绘制爆炸特效
     * @param {CanvasRenderingContext2D} context: 防御塔画布
     */
    drawEffect(context: CanvasRenderingContext2D) {
        const timeSpace = 50;

        // 满足时间间隔，切换下一帧
        if (Date.now() - this.springDate > timeSpace) {
            this.springDate = Date.now();
            this.springIndex += 1;
        }

        // 播放特效最后一帧，finished
        if (this.springIndex === this.effectSpringImages.length) {
            this.turnCycle("finished");

            // 敌人承伤
            this.handleDamage();
            return;
        }

        // 绘制特效
        this._drawEffect(context);
    }
    _drawEffect(context: CanvasRenderingContext2D) {
        const image = this.effectSpringImages[this.springIndex];

        // 计算特效居中对齐
        const offsetX = -(this.damageRange - MAP_ITEM_SIZE) / 2;
        const offsetY = -(this.damageRange - MAP_ITEM_SIZE) / 2;

        const targetCoord = {
            x: this.targetCoord.x + offsetX,
            y: this.targetCoord.y + offsetY,
        };

        context.drawImage(
            image,
            targetCoord.x,
            targetCoord.y,
            this.damageRange,
            this.damageRange
        );

        // TODO: test
        // context.strokeRect(
        //     targetCoord.x,
        //     targetCoord.y,
        //     this.damageRange,
        //     this.damageRange
        // );
        // context.stroke();
    }
    /**
     * 敌人承伤
     */
    handleDamage() {
        this.target.damage(this.damage);
    }

    /**
     * 切换生命周期
     * @param {number} cycle:LifeCycle
     */
    turnCycle(cycle: LifeCycle) {
        this.lifeCycle = cycle;
    }
}
