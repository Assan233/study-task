import type { IMonster } from "@/service/type";

import { Monster } from "@/service";
import { readAllSprite } from "@/utils";
import { MONSTER_A } from "@/const";
import { useGlobalStore } from "@/stores";

export function useMonster() {
    const global = useGlobalStore();

    /**
     * 敌人初始化
     */
    async function createMonster(data: typeof MONSTER_A): Promise<IMonster> {
        const { speed, blood, position, assets } = data;
        const { url, width, height, col, row } = assets;

        const springImages = await readAllSprite(url, col, row, width, height);
        const monster = new Monster(speed, blood, position, springImages, {
            width,
            height,
        });
        return monster;
    }

    /**
     * 依次渲染敌人到全局画布上
     */
    function dragMonster() {
        [...global.monsterList].map((monster) => {
            const nextMapItem =
                global.gameMap.mapData[monster.position.index + 1];

            if (!nextMapItem) {
            }

            monster.drawMonster(nextMapItem);
            global.layoutContext.drawImage(monster.context.canvas, 0, 0);
        });
    }

    return {
        createMonster,
        dragMonster,
    };
}
