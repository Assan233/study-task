import { Tower } from "@/service";
import { Tower_A } from "@/const";
import { useGlobalStore } from "@/stores";
import { readAllSprite, loadImage } from "@/utils";

export function useTower() {
    const global = useGlobalStore();

    /**
     * 防御塔初始化
     */
    async function addTower(config: typeof Tower_A) {
        const { range, speed, damage, position, assets } = config;
        const { tower, bullet, effect } = assets;
        const { url, col, row, width, height } = effect;

        // 静态资源初始化
        const [towerImage, bulletImage, effectSpringImages] = await Promise.all(
            [
                loadImage(tower),
                loadImage(bullet),
                readAllSprite(url, row, col, width, height),
            ]
        );

        const _tower = new Tower({
            range,
            speed,
            damage,
            position,
            towerImage,
            bulletImage,
            effectSpringImages,
        });
        global.towerList.add(_tower);
    }

    /**
     * 绘制所有防御塔
     */
    function drawTowers() {
        [...global.towerList].map((tower) => {
            tower.draw();
            global.layoutContext.drawImage(tower.context.canvas, 0, 0);
        });
    }

    return {
        addTower,
        drawTowers,
    };
}
