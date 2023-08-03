export type TowerAssets = {
    // 攻击塔的图片
    tower: string;
    // 塔攻击效果的雪碧图
    effect: SpringAsset;
    // 子弹图片
    bullet: string;
};

export type ITower = {
    draw: () => void;
    context: CanvasRenderingContext2D;
};

type SpringAsset = {
    url: string;
    col: number;
    row: number;
    width: number;
    height: number;
};

export type TowerConfig = {
    range: number;
    speed: number;
    damage: number;
    position: { x: number; y: number };
    towerImage: HTMLImageElement;
    bulletImage: HTMLImageElement;
    effectSpringImages: HTMLCanvasElement[];
};
