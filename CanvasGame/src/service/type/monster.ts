import type { IPosition } from "./map";

export type MonsterPosition = IPosition & { index: number };

export type Size = {
    width: number;
    height: number;
};
