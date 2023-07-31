# 游戏流程控制

1. 游戏开始，进入刷怪倒计时 `10s`
   - 点击菜单，开始创建`攻击塔`
   - `攻击塔`渲染完成
2. 开始刷怪，计算伤害
   - `攻击塔`检测范围内目标
   - `攻击塔`对范围内目标发射子弹, 并渲染爆炸特效
   - 计算范围内敌人伤害，`敌人`扣血承伤，当敌人血量不足，将`敌人实例`销毁
3. 敌人到达终点，玩家血量 `-1`



# 敌人

通过 `Monster`类批量生成 `敌人实例`。

实例上通过相关的`字段`来描述敌人的状态，以及一系列的`api`来提供操作 `敌人实例` 的方法。



## 属性和接口

### 属性

- 类型

  **type**: string

- 速度

  **type**: number

  每次动画渲染时移动的像素。

- 血量

  **type**: number

### 接口

- **draw()**

  敌人绘制`api` (包含动画的绘制)

- **damage(damage: number)**

  敌人承伤`api`

- **move(position: MonsterPosition)**

  移动到指定位置 (包含动画的绘制)

### 敌人类型

> 速度：每次动画渲染时移动的像素。

1. monster_a

   速度：4

2. monster_b

   速度：4

3. monster_c

   速度：6



# 防御塔

## 类型

### 弓箭攻击

- 攻击：多点射击，伤血
- 射程范围：32px
- 伤害范围：1px

### 炮弹攻击

- 单点范围攻击，伤血
- 攻击范围：24px
- 伤害范围：16px

### 毒液攻击

- 单点范围攻击，减速
- 攻击范围：24px
- 伤害范围：16px



# 地图



# 难点

## 如何渲染动画

动画绘制通过`requestAnimationFrame`进行绘制。

整体的绘制思路是：最外层通过`requestAnimationFrame` 调用各个实例上的 `draw` 接口在canvas上绘制每一帧。

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
export function checkInRange(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    return ctx.isPointInPath(150, 200);

}
```















