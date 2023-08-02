export type IPosition = {
    x: number;
    y: number;
};

export type IGameMap = {
    context: CanvasRenderingContext2D;
    mapData: IPosition[];
};
