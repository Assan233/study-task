import type { Coord } from "./index";

export type IGameMap = {
    context: CanvasRenderingContext2D;
    mapData: Coord[];
};
