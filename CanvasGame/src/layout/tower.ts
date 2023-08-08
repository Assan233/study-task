import { Tower } from "@/service";
import { Tower_A, Tower_B } from "@/const";
import { useGlobalStore } from "@/stores";
import { readAllSprite, loadImage } from "@/utils";
import pick from "lodash/pick";
import { ref } from "vue";

type TowerInfo = { coast: number; url: string };

export function useTower() {
    const global = useGlobalStore();
    const menuVisible = ref(false);

    /**
     * 防御塔初始化
     */
    async function addTower(config: typeof Tower_A) {
        const { range, speed, damage, coord, assets, fireRate, damageRange } =
            config;
        const { tower, bullet, effect } = assets;

        // 静态资源初始化
        const [towerImage, bulletSpringImages, effectSpringImages] =
            await Promise.all([
                loadImage(tower),
                readAllSprite(
                    bullet.url,
                    bullet.row,
                    bullet.col,
                    bullet.width,
                    bullet.height
                ),
                readAllSprite(
                    effect.url,
                    effect.row,
                    effect.col,
                    effect.width,
                    effect.height
                ),
            ]);

        const _tower = new Tower({
            range,
            speed,
            damage,
            damageRange,
            fireRate,
            coord,
            towerImage,
            bulletSpring: {
                images: bulletSpringImages,
                itemSize: pick(bullet, "height", "width"),
            },
            effectSpring: {
                images: effectSpringImages,
                itemSize: pick(effect, "height", "width"),
            },
        });
        global.towerList.add(_tower);
    }

    /**
     * 绘制所有防御塔
     */
    function drawTowers() {
        const monsterList = global.getMonsterList();
        const towerList = [...global.towerList];

        towerList.map((tower) => {
            tower.draw(monsterList);
            global.layoutContext.drawImage(tower.context.canvas, 0, 0);
        });
    }

    /**
     * @param {string} info:TowerInfo
     */
    function onBuild(info: TowerInfo) {
        switch (info.coast) {
            case 50:
                addTower(Tower_A);
                break;
            case 100:
                addTower(Tower_A);
                break;
            case 150:
                addTower(Tower_B);
                break;
        }
    }

    return {
        addTower,
        drawTowers,
        onBuild,
        menuVisible,
    };
}
