import type { Coord } from "./index";

export type IGameMap = {
    context: CanvasRenderingContext2D;
    mapData: Coord[];
};

export type MapConfig = {
    mapData: Coord[];
    towerMapData: Coord[];
    treeMapData: Coord[];
    assets: HTMLImageElement;
    towerMapAssets: HTMLImageElement;
    treeAssets: HTMLCanvasElement;
    startAssets: HTMLImageElement;
    endAssets: HTMLImageElement;
};
