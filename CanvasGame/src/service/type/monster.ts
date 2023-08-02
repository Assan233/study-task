import type { IPosition } from "./map";

export type MonsterPosition = IPosition & { index: number };

export type Size = {
    width: number;
    height: number;
};

export type IMonster = {
    position: MonsterPosition;
    context: CanvasRenderingContext2D;
    drawMonster(nextMapItem: Omit<MonsterPosition, "index">): void;
};
