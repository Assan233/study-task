import type { Coord, Size } from "./index";

export type MonsterCoord = Coord & { index: number };

export type IMonster = {
    speed: number;
    blood: number;
    finished: boolean;
    coord: MonsterCoord;
    context: CanvasRenderingContext2D;
    springItemSize: Size;
    draw(nextMapItem: Omit<MonsterCoord, "index">): void;
    damage(damage: number): void;
    get computedCoord(): Coord;
};
