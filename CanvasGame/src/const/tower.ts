import towerA from "@/assets/tower_0.png";
import bulletA from "@/assets/bullet_0.png";
import bulletEffectA from "@/assets/bullet_effect_0.png";

import towerB from "@/assets/tower_1.png";
import bulletB from "@/assets/bullet_1.png";
import bulletEffectB from "@/assets/bullet_effect_1.png";

import towerC from "@/assets/tower_2.png";
import bulletC from "@/assets/bullet_2.png";

export const Tower_A = {
    range: 150,
    damageRange: 60,
    speed: 6,
    damage: 20,
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
    range: 150,
    damageRange: 120,
    speed: 8,
    damage: 25,
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
    range: 200,
    damageRange: 60,
    speed: 8,
    damage: 6,
    fireRate: 1000,
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
