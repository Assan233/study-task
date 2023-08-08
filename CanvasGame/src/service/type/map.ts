import type { Coord } from "./index";

export type IGameMap = {
    context: CanvasRenderingContext2D;
    mapData: Coord[];
};

export type MapConfig = {
    mapData: Coord[];
    towerMapData: Coord[];
    assets: HTMLImageElement;
    towerMapAssets: HTMLImageElement;
};
