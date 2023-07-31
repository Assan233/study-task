/**
 * 检测点是否在圆内
 * @param {string} ctx:CanvasRenderingContext2D
 * @param {number} x:圆心坐标
 * @param {number} y:圆心坐标
 * @param {number} radius:半径
 */
export function checkInRange(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    return ctx.isPointInPath(150, 200);

}