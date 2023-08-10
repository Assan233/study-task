import monsterSpringA from "@/assets/monster_0.png";
import monsterSpringB from "@/assets/monster_1.png";

import towerA from "@/assets/tower_0.png";
import bulletA from "@/assets/bullet_0.png";
import bulletEffectA from "@/assets/bullet_effect_0.png";

import towerB from "@/assets/tower_1.png";
import bulletB from "@/assets/bullet_1.png";
import bulletEffectB from "@/assets/bullet_effect_1.png";

import towerC from "@/assets/tower_2.png";
import bulletC from "@/assets/bullet_2.png";

import menuA from "@/assets/menu_1.png";
import menuB from "@/assets/menu_2.png";
import menuC from "@/assets/menu_3.png";
import menuD from "@/assets/menu_4.png";

import statusA from "@/assets/status_0.png";
import statusB from "@/assets/status_1.png";
import statusC from "@/assets/status_2.png";

export const STATUS_IMAGES = [statusA,statusB,statusC]

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
    { x: MAP_ITEM_SIZE * 8, y: MAP_ITEM_SIZE * 1 + 150 },
    { x: MAP_ITEM_SIZE * 8, y: MAP_ITEM_SIZE * 2 + 150 },
    { x: MAP_ITEM_SIZE * 8, y: MAP_ITEM_SIZE * 3 + 150 },
    { x: MAP_ITEM_SIZE * 8, y: MAP_ITEM_SIZE * 4 + 150 },
    { x: MAP_ITEM_SIZE * 8, y: MAP_ITEM_SIZE * 5 + 150 },
    { x: MAP_ITEM_SIZE * 8, y: MAP_ITEM_SIZE * 6 + 150 },
    { x: MAP_ITEM_SIZE * 8, y: MAP_ITEM_SIZE * 7 + 150 },
    { x: MAP_ITEM_SIZE * 8, y: MAP_ITEM_SIZE * 8 + 150 },
    { x: MAP_ITEM_SIZE * 9, y: MAP_ITEM_SIZE * 8 + 150 },
    { x: MAP_ITEM_SIZE * 10, y: MAP_ITEM_SIZE * 8 + 150 },
    { x: MAP_ITEM_SIZE * 11, y: MAP_ITEM_SIZE * 8 + 150 },
    { x: MAP_ITEM_SIZE * 12, y: MAP_ITEM_SIZE * 8 + 150 },
    { x: MAP_ITEM_SIZE * 13, y: MAP_ITEM_SIZE * 8 + 150 },
    { x: MAP_ITEM_SIZE * 14, y: MAP_ITEM_SIZE * 8 + 150 },
];
export const TOWER_MAP_DATA = [
    { x: MAP_ITEM_SIZE * 2, y: MAP_ITEM_SIZE * 1 + 160 },
    { x: MAP_ITEM_SIZE * 6, y: MAP_ITEM_SIZE * 1 + 160 },
    { x: MAP_ITEM_SIZE * 9 + 10, y: MAP_ITEM_SIZE * 4 },
    { x: MAP_ITEM_SIZE * 9 + 10, y: MAP_ITEM_SIZE * 7 - 10 },
];

export const MENU_DATA = [
    { coast: 50, url: menuA },
    { coast: 100, url: menuC },
    { coast: 150, url: menuB },
    { coast: 0, url: menuD },
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
    blood: 150,
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
    range: 300,
    damageRange: 60,
    speed: 6,
    damage: 15,
    fireRate: 2000,
    coord: { x: 0, y: 0 },
    assets: {
        tower: towerA,
        bullet: {
            url: bulletA,
            col: 3,
            row: 6,
            width: 30,
            height: 30,
        },
        effect: {
            url: bulletEffectA,
            col: 2,
            row: 4,
            width: 50,
            height: 50,
        },
    },
};
export const Tower_B = {
    range: 300,
    damageRange: 120,
    speed: 8,
    damage: 15,
    fireRate: 3000,
    coord: { x: 0, y: 0 },
    assets: {
        tower: towerB,
        bullet: {
            url: bulletB,
            col: 3,
            row: 6,
            width: 30,
            height: 30,
        },
        effect: {
            url: bulletEffectB,
            col: 4,
            row: 4,
            width: 116,
            height: 116,
        },
    },
};
export const Tower_C = {
    range: 600,
    damageRange: 60,
    speed: 8,
    damage: 5,
    fireRate: 3000,
    coord: { x: 0, y: 0 },
    assets: {
        tower: towerC,
        bullet: {
            url: bulletC,
            col: 1,
            row: 1,
            width: 27,
            height: 27,
        },
        effect: {
            url: "",
            col: 0,
            row: 0,
            width: 0,
            height: 0,
        },
    },
};
