import monsterSpringA from "@/assets/monster_0.png";
import monsterSpringB from "@/assets/monster_1.png";

export const LAYOUT_SIZE = {
    width: 1200,
    height: 900,
};

export const MAP_ITEM_SIZE = 60;

export const MAP_DATA = [
    { x: 0, y: 150 },
    { x: 60 * 1, y: 150 },
    { x: 60 * 2, y: 150 },
    { x: 60 * 3, y: 150 },
    { x: 60 * 4, y: 150 },
    { x: 60 * 5, y: 150 },
    { x: 60 * 6, y: 150 },
    { x: 60 * 7, y: 150 },
    { x: 60 * 8, y: 150 },
    { x: 60 * 8, y: 150 + 60 * 1 },
    { x: 60 * 8, y: 150 + 60 * 2 },
    { x: 60 * 8, y: 150 + 60 * 3 },
    { x: 60 * 8, y: 150 + 60 * 4 },
];

export const MONSTER_A = {
    speed: 4,
    blood: 100,
    position: { index: 0, x: 0, y: 150 },
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
    blood: 100,
    position: { index: 0, x: 0, y: 150 },
    assets: {
        url: monsterSpringB,
        col: 2,
        row: 2,
        width: 53,
        height: 35,
    },
};
