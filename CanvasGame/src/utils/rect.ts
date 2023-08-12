type Direct = "left" | "right" | "top" | "bottom";
type Coord = {
    x: number;
    y: number;
};
type Size = {
    width: number;
    height: number;
};

/**
 * 检测点是否在圆内
 * @param {string} ctx:CanvasRenderingContext2D
 * @param {Coord} recPoint:圆心坐标
 * @param {Coord} point:单点坐标
 * @param {number} radius:半径
 */
export function checkInRange(
    ctx: CanvasRenderingContext2D,
    recPoint: Coord,
    point: Coord,
    radius: number
): boolean {
    return Math.hypot(point.x - recPoint.x, point.y - recPoint.y) <= radius;
}

/**
 * 根据目标位置判断当前点的移动位置
 * @param {Coord} currentPoint:当前点
 * @param {Coord} targetPoint:目标点
 * @return 移动方向
 */
export function calcDirect(currentPoint: Coord, targetPoint: Coord): Direct {
    const angle = calcAngleInDegrees(currentPoint, targetPoint);
    let direct: Direct = null!;
    
    // 根据2点间连接线的角度偏向，计算移动方向
    const calcMap = {
        top: () => angle >= 45 && angle < 135,
        left: () => angle >= 135 && angle < 225,
        bottom: () => angle >= 225 && angle < 315,
        right: () => angle >= 315 || angle < 45,
    };
    (Object.keys(calcMap) as Direct[]).forEach((key) => {
        if (calcMap[key]()) {
            direct = key;
        }
    });

    return direct;
}

/**
 * 计算两点之间的角度（以度为单位）
 * @param {string} currentPoint:Coord
 * @param {string} targetPoint:Coord
 */
function calcAngleInDegrees(currentPoint: Coord, targetPoint: Coord) {
    const deltaX = targetPoint.x - currentPoint.x;
    // canvas坐标y轴 和 正常坐标系y轴 是相反的
    const deltaY = -(targetPoint.y - currentPoint.y);
    const radians = Math.atan2(deltaY, deltaX);
    let degrees = radians * (180 / Math.PI);

    // 确保角度在0到360度之间
    if (degrees < 0) {
        degrees += 360;
    }

    return degrees;
}

/**
 * 计算在2点连线的线段上移动N，返回移动坐标的偏移值以及连接线的长度
 * @param {number} move: 移动的距离
 * @param {Coord} startPoint: 起始点
 * @param {Coord} endPoint: 终点
 */
export function calcMoveCoord(
    moveDistance: number,
    startPoint: Coord,
    endPoint: Coord
): Coord {
    // 连接线的方向向量
    const directionVector = [
        endPoint.x - startPoint.x,
        endPoint.y - startPoint.y,
    ];
    // 连接线的长度
    const distance = Math.sqrt(
        directionVector[0] ** 2 + directionVector[1] ** 2
    );
    // 计算标准化的方向向量
    const normalizedDirectionVector = [
        directionVector[0] / distance,
        directionVector[1] / distance,
    ];

    return {
        x: Math.round(moveDistance * normalizedDirectionVector[0]),
        y: Math.round(moveDistance * normalizedDirectionVector[1]),
    };
}

/**
 * 计算2点间距离
 * @param {any} startPoint:Coord
 * @param {any} endPoint:Coord
 */
export function calcDistance(startPoint: Coord, endPoint: Coord): number {
    const directionVector = [
        endPoint.x - startPoint.x,
        endPoint.y - startPoint.y,
    ];
    // 连接线的长度
    return Math.sqrt(directionVector[0] ** 2 + directionVector[1] ** 2);
}

export function calcAngleByPoint(startPoint: Coord, endPoint: Coord) {
    // 计算两点之间的距离
    const dx = endPoint.x - startPoint.x;
    const dy = endPoint.y - startPoint.y;
    // 计算旋转角度（弧度值）
    return Math.atan2(dy, dx);
}

/**
 * 检测点是否落在矩形内
 * @param {Coord} targetPoint: 移动的距离
 * @param {Coord} rectPoint: 起始点
 * @param {Coord} rectSize: 终点
 */
export function checkPointInRect(
    targetPoint: Coord,
    rectPoint: Coord,
    rectSize: Size
): boolean {
    return (
        targetPoint.x >= rectPoint.x &&
        targetPoint.x <= rectPoint.x + rectSize.width &&
        targetPoint.y >= rectPoint.y &&
        targetPoint.y <= rectPoint.y + rectSize.height
    );
}
