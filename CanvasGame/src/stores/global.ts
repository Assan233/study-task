import type { IMonster, IGameMap, ITower } from "@/service/type";

import { defineStore } from "pinia";

type StateType = {
    layoutContext: CanvasRenderingContext2D;
    layoutSize: {
        width: number;
        height: number;
    };
    // 敌人实例列表
    monsterList: Set<IMonster>;
    // 攻击塔实例列表
    towerList: Set<ITower>;
    gameMap: IGameMap;
};

export const useGlobalStore = defineStore("global", {
    state: (): StateType => ({
        layoutContext: null!,
        layoutSize: null!,
        monsterList: new Set(),
        towerList: new Set(),
        gameMap: null!,
    }),
    actions: {
        getMonsterList() {
            return [...this.monsterList].filter((monster) => !monster.finished);
        },
    },
});
