import { defineStore } from "pinia";
import { Monster, Tower, GameMap } from "@/service";

type StateType = {
    layoutContext: CanvasRenderingContext2D;
    layoutSize: {
        width: number;
        height: number;
    };
    // 敌人实例列表
    monsterList: (typeof Monster)[];
    // 攻击塔实例列表
    towerList: (typeof Tower)[];
    gameMap: typeof GameMap;
};

export const useGlobalStore = defineStore("global", {
    state: (): StateType => ({
        layoutContext: null!,
        layoutSize: null!,
        monsterList: [],
        towerList: [],
        gameMap: null!,
    }),
    actions: {},
});
