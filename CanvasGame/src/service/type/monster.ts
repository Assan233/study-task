import type { Coord, Size } from "./index";

export type MonsterCoord = Coord & { index: number };

export type IMonster = {
    speed: number;
    blood: number;
    currentBlood: number;
    finished: boolean;
    coord: MonsterCoord;
    context: CanvasRenderingContext2D;
    springItemSize: Size;
    get computedCoord(): Coord;

    draw(nextMapItem: Omit<MonsterCoord, "index">): void;
    damage(damage: number): void;
    slow(speed: number, time: number): void;
    finish(): void;
};
