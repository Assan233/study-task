import type { IMonster } from "./monster";
import type { SpringAssets } from "./index";

export type ITower = {
    draw: (targets: IMonster[]) => void;
    context: CanvasRenderingContext2D;
};

export type TowerConfig = {
    range: number;
    speed: number;
    fireRate: number;
    damage: number;
    damageRange: number;
    coord: { x: number; y: number };
    towerImage: HTMLImageElement;
    bulletSpring: SpringAssets;
    effectSpring: SpringAssets;
};
