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

- 类型

  **type**: string

- 速度

  **type**: number

  每次动画渲染时移动的像素。

- 血量

  **type**: number

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

- 攻击塔各种渲染效果贴图

  **assets**: TowerAssets

  ```ts
  type TowerAssets = {
      // 攻击塔的图片
      tower: string;
      // 塔攻击效果的雪碧图
      effect: string;
      // 子弹图片
      bullet: string;
  }
  ```

- 攻击范围

  **range**: number

- 伤害

  **damage**: number

#### 接口

- **draw()**

  攻击塔绘制

- **attackTargets(targets: IMonster[])**

  攻击目标

- **renderBullet(target: IMonster)**

  绘制子弹(动画绘制)

- **renderBoom(target: IMonster)**

  绘制爆炸特效(动画绘制)



## 地图

1. 地图路径通过`单元格`渲染，每个单元格大小为 `8*8`。
2. 地图路径数据是由每个单元格左上角坐标组成的数组，是`预设数据`。
3. 地图宽高是`12：9`。
4. 敌人的移动路径依赖`地图实例`，渲染每一帧时，将**敌人坐标**与**当前地图单元格**坐标`diff`，如果敌人坐标溢出了，根据位置信息判断敌人接下来的运动方向。



### 属性和接口

#### 属性

- 地图尺寸

  **size**: Size

  ```ts
  type Size = {
      weith: number;
      height: number;
  }
  ```

- 单元格大小

  **itemSize**: Size

- 地图数据

  **mapData**: IPosition[]

  ```ts
  type IPosition = {
      x: number;
      y: number;
  }
  ```

- 路面贴图

  **assets**: string

#### 接口

- **draw()**

  地图绘制接口



# 难点

## 如何渲染动画

动画绘制通过`requestAnimationFrame`进行绘制。

整体的绘制思路是：

- 每个`实体`按照自己的规则渲染每一帧。
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













