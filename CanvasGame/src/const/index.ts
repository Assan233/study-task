export * from "./map";
export * from "./monster";
export * from "./tower";

import menuA from "@/assets/menu_1.png";
import menuB from "@/assets/menu_2.png";
import menuC from "@/assets/menu_3.png";
import menuD from "@/assets/menu_4.png";

import statusA from "@/assets/status_0.png";
import statusB from "@/assets/status_1.png";
import statusC from "@/assets/status_2.png";

export const STATUS_IMAGES = [statusA, statusB, statusC];

export const LAYOUT_SIZE = {
    width: 1200,
    height: 900,
};

export const MENU_DATA = [
    { type: "arrow", coast: 50, url: menuA },
    { type: "venom", coast: 100, url: menuC },
    { type: "shell", coast: 150, url: menuB },
    { type: "ice", coast: 100, url: menuD },
];
