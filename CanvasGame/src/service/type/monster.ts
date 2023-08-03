import type { Coord } from "./index";

export type MonsterCoord = Coord & { index: number };

export type IMonster = {
    coord: MonsterCoord;
    context: CanvasRenderingContext2D;
    drawMonster(nextMapItem: Omit<MonsterCoord, "index">): void;
};
