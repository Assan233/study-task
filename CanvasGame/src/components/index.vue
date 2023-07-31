<template>
    <div>
        <button class="btn-run" @click="run">run</button>
        <button class="btn-pause">pause</button>
    </div>
    <hr />
    <canvas width="1000" height="600" id="renderLayout"></canvas>
</template>

<script setup lang="ts">
// import { ref } from "vue";

function run() {
    const canvas = document.querySelector("#renderLayout");
    const ctx = canvas.getContext("2d");
    const w = 600,
        h = 600;
    const enemy = {
        x: 50,
        y: 50,
        // xy表示: 1:左 2:下 3:右 4:上
        xy: 3,
        // 速度
        speed: 2,
    };
    const tower = {
        x: 200,
        y: 200,
        // 子弹速度
        bulletSpeed: 8,
    };
    const bulletArr = [];
    const xyArr = [
        { x: 350, y: 350 },
        { x: 50, y: 350 },
        { x: 50, y: 50 },
        { x: 350, y: 50 },
    ];
    var timer = 0;
    const shootFun = throttle(() => {
        shootBullet();
    });

    const draw = () => {
        if (timer) cancelAnimationFrame(timer);
        (function go() {
            startDraw();
            timer = requestAnimationFrame(go);
        })();
    };
    draw();

    function startDraw() {
        ctx.clearRect(0, 0, w, h);
        drawTower();
        drawEnemy();
        moveEnemy();
        shootFun();
        moveBullet();
    }
    function drawTower() {
        ctx.font = "50px 宋体";
        ctx.fillText("塔", tower.x, tower.y);
    }
    function drawEnemy() {
        ctx.font = "50px 宋体";
        ctx.fillText("敌", enemy.x, enemy.y);
    }
    function moveEnemy() {
        const { speed, xy, x, y } = enemy;
        for (let i = 0; i < xyArr.length; i++) {
            if (
                x >= xyArr[i].x &&
                x <= xyArr[i].x + speed &&
                y >= xyArr[i].y &&
                y <= xyArr[i].y + speed
            ) {
                if (i + 1 !== enemy.xy) {
                    enemy.xy = i + 1;
                    break;
                }
            }
        }
        switch (enemy.xy) {
            case 1:
                enemy.x -= speed;
                break;
            case 2:
                enemy.y -= speed;
                break;
            case 3:
                enemy.x += speed;
                break;
            case 4:
                enemy.y += speed;
                break;
        }
    }
    // 发射子弹
    function shootBullet() {
        const size = 50;
        // 敌人中心
        const ex = enemy.x + size / 2,
            ey = enemy.y - size / 2;
        // 塔防中心，也是子弹初始坐标
        const begin = { x: tower.x + size / 2, y: tower.y - size / 2 };
        const diff = { x: ex - begin.x, y: ey - begin.y };
        // 子弹和敌人的距离
        const distance = powAndSqrt(diff.x, diff.y);
        const addX = (tower.bulletSpeed * diff.x) / distance;
        const addY = (tower.bulletSpeed * diff.y) / distance;
        bulletArr.push({
            x: begin.x,
            y: begin.y,
            addX,
            addY,
            xy: 0,
            distance,
        });
    }
    // 移动子弹
    function moveBullet() {
        for (let i = bulletArr.length - 1; i >= 0; i--) {
            const { addX, addY, distance } = bulletArr[i];
            if (bulletArr[i].xy >= distance) {
                bulletArr.splice(i, 1);
            } else {
                bulletArr[i].x += addX;
                bulletArr[i].y += addY;
                bulletArr[i].xy += tower.bulletSpeed;
                drawBullet(bulletArr[i]);
            }
        }
    }
    // 画子弹
    function drawBullet(bullet) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, 5, 0, 2 * Math.PI, false);
        ctx.fillStyle = "skyblue";
        ctx.fill();
        ctx.restore();
    }
    // 防抖
    function throttle(fn) {
        let timer = null;
        return () => {
            if (timer) return;
            timer = setTimeout(() => {
                fn();
                clearTimeout(timer);
                timer = null;
            }, 500);
        };
    }

    /** 两值平方相加并开方 求斜边 */
    function powAndSqrt(val1, val2) {
        return Math.sqrt(Math.pow(val1, 2) + Math.pow(val2, 2));
    }
}
</script>

<style scoped>
#renderLayout {
    border: 1px solid seagreen;
}
</style>
