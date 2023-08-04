# 游戏流程控制

1. 游戏开始，进入刷怪倒计时 `10s`
   - 点击菜单，开始创建`攻击塔`
   - `攻击塔`渲染完成
2. 开始刷怪，计算伤害
   - `攻击塔`检测范围内目标
   - `攻击塔`对范围内目标发射子弹, 并渲染爆炸特效
   - 计算范围内敌人伤害，`敌人`扣血承伤，当敌人血量不足，将`敌人实例`销毁
3. 敌人到达终点，玩家血量 `-1`



# 游戏主体

## 地图

1. 地图路径通过`单元格`渲染，每个单元格大小为 `8*8`。
2. 地图路径数据是由每个单元格左上角坐标组成的数组，是`预设数据`。
3. 地图宽高是`12：9`。
4. 敌人的移动路径依赖`地图实例`，渲染每一帧时，将**敌人坐标**与**当前地图单元格**坐标`diff`，如果敌人坐标溢出了，根据位置信息判断敌人接下来的运动方向。



### 属性和接口

#### 属性

```ts
 	// 地图单元格大小
 	itemSize: Size[] = [];
	// 地图数据
 	mapData: Coord[] = [];
    // 路面贴图
    assets: HTMLImageElement = null!;
    // 实例渲染图层
    context: CanvasRenderingContext2D = null!;
```

#### 接口

- **draw()**

  地图绘制接口

  

## 敌人

通过 `Monster`类批量生成 `敌人实例`。

实例上通过相关的`字段`来描述敌人的状态，以及一系列的`api`来提供操作 `敌人实例` 的方法。

### 类型

> 速度：每次动画渲染时移动的像素。

| 类型      | 速度 |
| --------- | ---- |
| monster_a | 4    |
| monster_b | 5    |
| monster_c | 6    |

### 属性和接口

#### 属性

```ts
 	type: string = "";
    speed: number = 0;
    blood: number = 0;
    // 怪物动画抽帧canvas图集
    springImages: HTMLCanvasElement[] = [];
    // 当前播放雪碧图index
    springIndex: number = 0;
    // 缓存播放帧的时间
    springDate: number = 0;
    springItemSize: Size = null!;
    // // 实例渲染图层
    // context: CanvasRenderingContext2D = null!;
    // 在地图中格子的位置
    coord: MonsterCoord = {
        // 格子的索引位置
        index: 0,
        x: 0,
        y: 0,
    };
```

#### 接口

- **draw()**

  敌人绘制`api` (包含动画的绘制)

- **damage(damage: number)**

  敌人承伤`api`

- **move(position: MonsterPosition)**

  移动到指定位置 (包含动画的绘制)



## 防御塔

### 类型

| 类型     | 攻击               | 射程范围 | 伤害范围 |
| -------- | ------------------ | -------- | -------- |
| 弓箭攻击 | 多点射击，伤血     | 32px     | 1px      |
| 炮弹攻击 | 单点范围攻击，伤血 | 24px     | 16px     |
| 毒液攻击 | 单点范围攻击，减速 | 24px     | 16px     |

### 属性和接口

#### 属性

```ts
  	// 静态资源
    towerImage: HTMLImageElement = null!;
    bulletImage: HTMLImageElement = null!;
    // 爆炸动图效果抽帧canvas图集
    effectSpringImages: HTMLCanvasElement[] = [];

    // 攻击范围-半径
    range: number = 0;
    // 子弹速度
    speed: number = 0;
    // 伤害
    damage: number = 0;
    // 射速-ms
    fireRate: number = 0;
    // 上一次攻击的时间，控制射速需要
    lastAttackTime: number = 0;
    // // 实例渲染图层
    // context: CanvasRenderingContext2D = null!;
    coord: Coord = null!;

    bulletList: IBullet[] = [];
    targetList: Set<IMonster> = new Set();
```

#### 接口

- **draw()**

  攻击塔绘制

- **attackTargets(targets: IMonster[])**

  攻击目标

- **renderBullet(target: IMonster)**

  绘制子弹(动画绘制)

- **renderBoom(target: IMonster)**

  绘制爆炸特效(动画绘制)



## 子弹

`子弹实例`寄生在`防御塔实例`中，整个攻击流程如下：

1. 通过`防御塔`的`攻击范围`检测攻击目标
2. 根据`射速`创建`子弹实例`
3. 计算`子弹速度`下坐标的偏移量
4. 检查子弹生命周期，决定是否销毁子弹
5. 最后在防御塔图层的画布中渲染子弹

### 属性和接口

#### 属性

```ts
 class Bullet {
     // 攻击范围
    range: number = 0;
    // 子弹速度
    speed: number = 0;
    // 伤害
    damage: number = 0;
    // 记录当前子弹位置
    currentCoord: Coord = null!;
    // 子弹的生命周期  "flying" | "booming" | "finished";
    lifeCycle: LifeCycle = "flying";

    /**
     * 这里绑定Monster的原因是，在子弹飞行时间内，Monster位置会变化，
     * 绑定Monster可以在每次绘制帧时获取Monster实时位置，保证落点准确
     */
    target: IMonster = null!;
    bulletImage: HTMLImageElement = null!;
    // 爆炸动图效果抽帧canvas图集
    effectSpringImages: HTMLCanvasElement[] = [];
    currentSpringIndex: number = 0;
}
```

#### 接口

- **drawBulletOnTower(context: CanvasRenderingContext2D)**

  基于 防御塔画布 绘制子弹





# 难点

## 如何渲染动画

动画绘制通过`requestAnimationFrame`进行绘制。

整体的绘制思路是：

- 为了避免实体之间相互影响，每个`实体`都有自己独立的`canvas图层`，最后通过将各个图层**合并渲染**。
- 子弹的渲染还有**爆炸特效**，那么就需要对子弹做`终点校验`，当子弹到达终点时，渲染爆炸特效。

### 动画类型

- 雪碧图动画

  如 敌人的状态动画/子弹的爆炸效果

  提前计算所有帧，循环取帧

- 目标路径的动画

  如子弹的移动/敌人的移动

  每一帧通过计算`speed`偏移值渲染。

> 需要及时清理`实例`以及`动画`，以防止引起内存泄漏



## 计算敌人是否在范围内

通过 `Context.isPointInPath(path，x，y)` 计算点是否在路径内。

```ts
function checkInRange(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    return ctx.isPointInPath(150, 200);

}
```



## 怪物移动路径计算

敌人的移动路径依赖`地图实例`，渲染每一帧时，将**敌人坐标**与**当前地图单元格**坐标`diff`，如果敌人坐标溢出了，根据位置信息判断敌人接下来的运动方向。

```ts
function calcDirect(currentPoint: Position, targetPoint: Position): Direct {
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
```



## 子弹的绘制

子弹的绘制分为`飞行阶段`和`爆炸阶段`，通过声明`子弹生命周期`的形式来控制子弹的绘制。

```ts
// 生命周期
type LifeCycle = "flying" | "booming" | "finished";
```

### 生命周期的边界判断

1. **flying --> booming**

   条件：计算`子弹`与`目标`之间连接线的长度 <= `子弹速度`

   ```ts
    // 连接线的方向向量
   const directionVector = [
       endPoint.x - startPoint.x,
       endPoint.y - startPoint.y,
   ];
   // 连接线的长度
   const distance = Math.sqrt(
       directionVector[0] ** 2 + directionVector[1] ** 2
   );
   
   const isDone = inRange(Math.abs(distance), 0, speed)
   ```

   

2. **booming --> finished**

   完成爆炸特效绘制时。




