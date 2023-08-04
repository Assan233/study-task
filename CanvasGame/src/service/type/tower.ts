import type { IMonster } from "./monster";

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
    bulletImage: HTMLImageElement;
    effectSpringImages: HTMLCanvasElement[];
};
