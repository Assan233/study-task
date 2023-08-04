import type { Coord, Size } from "./index";

export type MonsterCoord = Coord & { index: number };

export type IMonster = {
    speed: number;
    coord: MonsterCoord;
    context: CanvasRenderingContext2D;
    springItemSize: Size;
    drawMonster(nextMapItem: Omit<MonsterCoord, "index">): void;
};
