import type { IMonster, IGameMap, ITower, Coord } from "@/service/type";
import { defineStore } from "pinia";
import random from "lodash/random";

type StateType = {
    animationTimer: number;
    timers: number[];

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

    // 菜单
    menuVisible: boolean;
    menuCoord: Coord;

    // 玩家状态
    coin: number; // 金币
    blood: number; // 生命值
    killed: number; // 杀死的敌人
};

export const useGlobalStore = defineStore("global", {
    state: (): StateType => ({
        animationTimer: null!,
        timers: [],

        layoutContext: null!,
        layoutSize: null!,
        monsterList: new Set(),
        towerList: new Set(),
        gameMap: null!,
        menuVisible: false,
        menuCoord: { x: 0, y: 0 },

        // 玩家状态
        coin: 350,
        blood: 10,
        killed: 0,
    }),
    actions: {
        clearMonsterList() {
            const list = [...this.monsterList].filter(
                (monster) => !monster.finished
            );
            this.monsterList = new Set(list);
        },
        getMonsterList() {
            return [...this.monsterList].filter((monster) => !monster.finished);
        },

        /**
         * 重新开始
         */
        clear() {
            if (this.animationTimer) {
                cancelAnimationFrame(this.animationTimer);
            }
            if (this.timers.length) {
                this.timers.forEach(clearTimeout);
            }

            Object.assign(this, {
                monsterList: new Set(),
                towerList: new Set(),
                coin: 350,
                blood: 10,
                killed: 0,
                animationTimer: null!,
            });
        },

        /**
         * 玩家状态
         */
        damageUser() {
            this.blood -= 1;
            
            // 输了清空画布
            if (this.blood === 0) {
                this.clear();
            }
        },
        /**
         * 玩家得分
         */
        scoreCoin() {
            const coin = random(8, 20);
            this.coin += coin;
        },
        /**
         * 消费金币
         */
        coastCoin(coin: number) {
            this.coin -= coin;
        },

        /**
         * 统计杀死的敌人
         */
        countKilled() {
            this.killed += 1;
        },
    },
});
