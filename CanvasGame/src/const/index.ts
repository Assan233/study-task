import monsterSpringA from "@/assets/monster_0.png";
import monsterSpringB from "@/assets/monster_1.png";

import towerA from "@/assets/tower_0.png";
import bulletA from "@/assets/bullet_0.png";
import bulletEffectA from "@/assets/bullet_effect_0.png";

import towerB from "@/assets/tower_1.png";
import bulletB from "@/assets/bullet_1.png";
import bulletEffectB from "@/assets/bullet_effect_1.png";

export const LAYOUT_SIZE = {
    width: 1200,
    height: 900,
};

export const MAP_ITEM_SIZE = 60;

export const MAP_DATA = [
    { x: 0, y: 150 },
    { x: MAP_ITEM_SIZE * 1, y: 150 },
    { x: MAP_ITEM_SIZE * 2, y: 150 },
    { x: MAP_ITEM_SIZE * 3, y: 150 },
    { x: MAP_ITEM_SIZE * 4, y: 150 },
    { x: MAP_ITEM_SIZE * 5, y: 150 },
    { x: MAP_ITEM_SIZE * 6, y: 150 },
    { x: MAP_ITEM_SIZE * 7, y: 150 },
    { x: MAP_ITEM_SIZE * 8, y: 150 },
    { x: MAP_ITEM_SIZE * 8, y: 150 + MAP_ITEM_SIZE * 1 },
    { x: MAP_ITEM_SIZE * 8, y: 150 + MAP_ITEM_SIZE * 2 },
    { x: MAP_ITEM_SIZE * 8, y: 150 + MAP_ITEM_SIZE * 3 },
    { x: MAP_ITEM_SIZE * 8, y: 150 + MAP_ITEM_SIZE * 4 },
    { x: MAP_ITEM_SIZE * 8, y: 150 + MAP_ITEM_SIZE * 5 },
    { x: MAP_ITEM_SIZE * 8, y: 150 + MAP_ITEM_SIZE * 6 },
    { x: MAP_ITEM_SIZE * 8, y: 150 + MAP_ITEM_SIZE * 7 },
    { x: MAP_ITEM_SIZE * 8, y: 150 + MAP_ITEM_SIZE * 8 },
    { x: MAP_ITEM_SIZE * 9, y: 150 + MAP_ITEM_SIZE * 8 },
    { x: MAP_ITEM_SIZE * 10, y: 150 + MAP_ITEM_SIZE * 8 },
    { x: MAP_ITEM_SIZE * 11, y: 150 + MAP_ITEM_SIZE * 8 },
    { x: MAP_ITEM_SIZE * 12, y: 150 + MAP_ITEM_SIZE * 8 },
    { x: MAP_ITEM_SIZE * 13, y: 150 + MAP_ITEM_SIZE * 8 },
    { x: MAP_ITEM_SIZE * 14, y: 150 + MAP_ITEM_SIZE * 8 },
];

export const MONSTER_A = {
    speed: 2,
    blood: 100,
    coord: { index: 0, x: 0, y: 150 },
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
    coord: { index: 0, x: 0, y: 150 },
    assets: {
        url: monsterSpringB,
        col: 2,
        row: 2,
        width: 53,
        height: 35,
    },
};

export const Tower_A = {
    range: 200,
    damageRange: 50,
    speed: 3,
    damage: 15,
    fireRate: 2000,
    coord: { x: 150, y: 250 },
    assets: {
        tower: towerA,
        bullet: bulletA,
        effect: {
            url: bulletEffectA,
            col: 3,
            row: 3,
            width: 22,
            height: 22,
        },
    },
};
export const Tower_B = {
    range: 250,
    damageRange: 150,
    speed: 3,
    damage: 15,
    fireRate: 3000,
    coord: { x: 150, y: 250 },
    assets: {
        tower: towerB,
        bullet: bulletB,
        effect: {
            url: bulletEffectB,
            col: 4,
            row: 4,
            width: 116,
            height: 116,
        },
    },
};