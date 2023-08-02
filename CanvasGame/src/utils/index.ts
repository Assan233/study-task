type Position = {
    x: number;
    y: number;
};
type Size = {
    width: number;
    height: number;
};
type Direct = "left" | "right" | "top" | "bottom";

/**
 * 检测点是否在圆内
 * @param {string} ctx:CanvasRenderingContext2D
 * @param {Position} recPoint:圆心坐标
 * @param {Position} point:单点坐标
 * @param {number} radius:半径
 */
export function checkInRange(
    ctx: CanvasRenderingContext2D,
    recPoint: Position,
    point: Position,
    radius: number
): boolean {
    ctx.arc(recPoint.x, recPoint.y, radius, 0, Math.PI * 2, false);
    return ctx.isPointInPath(point.x, point.y);
}

/**
 * 根据目标位置判断当前点的移动位置
 * @param {Position} currentPoint:当前点
 * @param {Position} targetPoint:目标点
 * @return 移动方向
 */
export function calcDirect(
    currentPoint: Position,
    targetPoint: Position
): Direct {
    const calcMap = {
        left: () =>
            currentPoint.x < targetPoint.x && currentPoint.y === targetPoint.y,
        right: () =>
            currentPoint.x > targetPoint.x && currentPoint.y === targetPoint.y,
        top: () =>
            currentPoint.y > targetPoint.y && currentPoint.x === targetPoint.x,
        bottom: () =>
            currentPoint.y < targetPoint.y && currentPoint.x === targetPoint.x,
    };

    let direct: Direct = null!;
    Object.keys(calcMap).forEach((key) => {
        if (calcMap[key]()) {
            direct = key;
        }
    });

    return direct;
}

/**
 * 加载图片
 * @param {string} url:string
 */
export function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(image);
    });
}

/**
 * 切割雪碧图拿到所有结果
 * @param {string} spriteUrl: 雪碧图url
 * @param {number} spriteRows: 需要切割的行列
 * @param {number} spriteCols: 需要切割的行列
 * @param {number} width: 切割尺寸
 * @param {number} height: 切割尺寸
 */
export async function readAllSprite(
    spriteUrl: string,
    spriteRows: number,
    spriteCols: number,
    width: number,
    height: number
): Promise<HTMLCanvasElement[]> {
    const spriteCanvas = document.createElement("canvas");
    const spriteCtx = spriteCanvas.getContext("2d") as CanvasRenderingContext2D;
    const spriteImage = (await loadImage(spriteUrl)) as HTMLImageElement;
    spriteCtx.drawImage(spriteImage, 0, 0);

    const images = [];
    for (let row = 0; row < spriteRows; row++) {
        for (let col = 0; col < spriteCols; col++) {
            const x = col * width;
            const y = row * height;

            const imageData = spriteCtx.getImageData(x, y, width, height);
            images.push(imageDataToCanvas(imageData));
        }
    }

    return images;
}

/**
 * ImageData转canvas
 * @param {number} data:ImageData
 */
function imageDataToCanvas(data: ImageData): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = data.width;
    canvas.height = data.height;
    ctx.putImageData(data, 0, 0);

    return canvas;
}

export function createCanvas(size: Size): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.width = size.width;
    canvas.height = size.height;

    return canvas;
}
