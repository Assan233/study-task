import type { IMonster, IGameMap } from "@/service/type";

import { defineStore } from "pinia";
import { Monster, Tower, GameMap } from "@/service";

type StateType = {
    layoutContext: CanvasRenderingContext2D;
    layoutSize: {
        width: number;
        height: number;
    };
    // 敌人实例列表
    monsterList: Set<IMonster>;
    // 攻击塔实例列表
    towerList: Set<typeof Monster>;
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
    actions: {},
});
