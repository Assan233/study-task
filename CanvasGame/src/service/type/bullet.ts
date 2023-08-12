import type { IMonster } from "./monster";
import { Coord, SpringAssets } from "./index";

export type LifeCycle = "flying" | "booming" | "finished";

export type IBullet = {
    // 子弹的生命周期是否已经结束
    lifeCycle: LifeCycle;
    drawBulletOnTower(context: CanvasRenderingContext2D): void;
};

export type BulletConfig = {
    // 攻击范围
    range: number;
    // 子弹速度
    speed: number;
    slow: number;
    // 伤害
    damage: number;
    damageRange: number;
    // 防御塔坐标
    towerCoord: Coord;

    target: IMonster;
    bulletSpring: SpringAssets;
    effectSpring: SpringAssets;
};
