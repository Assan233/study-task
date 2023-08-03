import type { IMonster } from "./monster";
import { Coord } from "./index";

export type IBullet = {
    drawBulletOnTower(context: CanvasRenderingContext2D): void;
};

export type BulletConfig = {
    // 攻击范围
    range: number;
    // 子弹速度
    speed: number;
    // 伤害
    damage: number;
    // 防御塔坐标
    towerCoord: Coord;

    target: IMonster;
    bulletImage: HTMLImageElement;
    // 爆炸动图效果抽帧canvas图集
    effectSpringImages: HTMLCanvasElement[];
};
