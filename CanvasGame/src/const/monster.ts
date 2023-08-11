import monsterSpringA from "@/assets/monster_0.png";
import monsterSpringB from "@/assets/monster_1.png";
import monsterSpringC from "@/assets/monster_2.png";

export const MONSTER_A = {
    speed: 2,
    blood: 100,
    coord: { index: 0, x: 0, y: 0 },
    assets: {
        url: monsterSpringA,
        col: 2,
        row: 2,
        width: 32,
        height: 32,
    },
};

export const MONSTER_B = {
    speed: 4,
    blood: 150,
    coord: { index: 0, x: 0, y: 0 },
    assets: {
        url: monsterSpringB,
        col: 2,
        row: 2,
        width: 53,
        height: 35,
    },
};
export const MONSTER_C = {
    speed: 6,
    blood: 200,
    coord: { index: 0, x: 0, y: 0 },
    assets: {
        url: monsterSpringC,
        col: 2,
        row: 2,
        width: 36,
        height: 42,
    },
};