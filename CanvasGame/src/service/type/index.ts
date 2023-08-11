export type * from "./map";
export type * from "./monster";
export type * from "./tower";
export type * from "./bullet";

export type Coord = {
    x: number;
    y: number;
};

export type Size = {
    width: number;
    height: number;
};

export type SpringAssets = {
    images: HTMLCanvasElement[];
    itemSize: Size;
};

export type SpringAssetsInfo = SpringAssets & {
    // 当前播放雪碧图index
    index: number;
    // 缓存播放帧的时间
    springDate: number;
};

export type Direct = "left" | "right" | "top" | "bottom";
