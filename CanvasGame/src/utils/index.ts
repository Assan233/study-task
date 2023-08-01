type Position = {
    x: number;
    y: number;
}
type Direct = 'left' | 'right' | 'top' | 'bottom'

/**
 * 检测点是否在圆内
 * @param {string} ctx:CanvasRenderingContext2D
 * @param {Position} recPoint:圆心坐标
 * @param {Position} point:单点坐标
 * @param {number} radius:半径
 */
export function checkInRange(ctx: CanvasRenderingContext2D, recPoint: Position, point: Position, radius: number): boolean {
    ctx.arc(recPoint.x, recPoint.y, radius, 0, Math.PI * 2, false);
    return ctx.isPointInPath(point.x, point.y);
}

/**
 * 根据目标位置判断当前点的移动位置
 * @param {Position} currentPoint:当前点
 * @param {Position} targetPoint:目标点
 * @return 移动方向
 */
export function calcDirect(currentPoint: Position, targetPoint: Position): Direct {
    const calcMap = {
        left: () => (currentPoint.x < targetPoint.x) && (currentPoint.y === targetPoint.y),
        right: () => (currentPoint.x > targetPoint.x) && (currentPoint.y === targetPoint.y),
        top: () => (currentPoint.y > targetPoint.y) && (currentPoint.x === targetPoint.x),
        bottom: () => (currentPoint.y < targetPoint.y) && (currentPoint.x === targetPoint.x),
    }

    let direct: Direct = null!;
    Object.keys(calcMap).forEach(key => {
        if (calcMap[key]()) {
            direct = key
        }
    });

    return direct
}

/**
 * 加载图片
 * @param {string} url:string
 */
export function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(image)
    })

}

// export function genMapData() {
//     const data = []

//     for (let index = 0; index < 10; index++) {
//         data.push({
//             x: 80 * index,
//             y: 200
//         })
//     }
//     return data
// }