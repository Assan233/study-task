import type { IMonster } from "@/service/type";

import { Monster } from "@/service";
import { readAllSprite } from "@/utils";
import { MONSTER_A, MONSTER_B, MONSTER_C } from "@/const";
import { useGlobalStore } from "@/stores";
import { random, cloneDeep } from "lodash";

const monsterPresets = [MONSTER_A, MONSTER_B, MONSTER_C];

export function useMonster() {
    const global = useGlobalStore();

    /**
     * 随机生成敌人列表
     * @param {number} count:number
     */
    function randomCreateMonsters(count: number): Promise<IMonster[]> {
        let list = new Array(count).fill(0);

        return Promise.all(
            list.map(() => {
                const index = random(0, monsterPresets.length - 1);
                return createMonster(monsterPresets[index]);
            })
        );
    }

    /**
     * 延迟时间往global添加 Monster
     * @param {number} count:type
     */
   async function delayAddMonster(count: number) {
        const monsterList = await randomCreateMonsters(count);

        let delay = 0;
        monsterList.forEach((monster) => {
            const timer = setTimeout(() => {
                global.monsterList.add(monster);
            }, delay);
            global.timers.push(timer);

            delay += random(3 * 1000, 5 * 1000);
        });
    }

    /**
     * 创建敌人
     */
    async function createMonster(data: typeof MONSTER_A): Promise<IMonster> {
        const { speed, blood, assets } = cloneDeep(data);
        const { url, width, height, col, row } = assets;
        // 取地图第一个坐标点为起点
        const coord = {
            index: 0,
            ...global.gameMap.mapData[0],
        };

        const springImages = await readAllSprite(url, col, row, width, height);
        const monster = new Monster(speed, blood, coord, springImages, {
            width,
            height,
        });
        return monster;
    }

    /**
     * 依次渲染敌人到全局画布上
     */
    function drawMonster() {
        const monsterList = global.getMonsterList();

        monsterList.forEach((monster) => {
            const nextMapItem = global.gameMap.mapData[monster.coord.index + 1];

            // 玩家承伤
            if (!nextMapItem) {
                global.damageUser();
                monster.finish();
                return;
            }

            // 玩家得分
            if (monster.currentBlood <= 0) {
                global.scoreCoin();
                global.countKilled();
                monster.finish();
                return;
            }

            monster.draw(nextMapItem);
            global.layoutContext.drawImage(monster.context.canvas, 0, 0);
        });
    }

    return {
        drawMonster,
        randomCreateMonsters,
        delayAddMonster,
    };
}
