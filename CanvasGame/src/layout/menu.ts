import type { Coord } from "@/service/type";
import { useGlobalStore } from "@/stores";

import { checkPointInRect } from "@/utils";
import { TOWER_MAP_DATA, MAP_ITEM_SIZE } from "@/const";

export function useMenu() {
    const global = useGlobalStore();

    function onClickLayout(e: MouseEvent) {
        const towerCoord = getRenderPoint(e);

        if (towerCoord) {
            renderMenu(towerCoord);
            global.menuCoord = towerCoord;
        } else {
            global.menuVisible = false;
        }
    }

    /**
     * 获取画布上渲染防御塔的坐标
     * @param {MouseEvent} e:MouseEvent
     */
    function getRenderPoint(e: MouseEvent): Coord {
        const layout = document.querySelector(".layout canvas");
        const layoutRect = layout?.getBoundingClientRect() as DOMRect;

        const reallyCoord = {
            x: e.clientX - layoutRect.x,
            y: e.clientY - layoutRect.y,
        };
        let coord: Coord = null!;

        TOWER_MAP_DATA.filter((_coord: Coord) => {
            const inRect = checkPointInRect(reallyCoord, _coord, {
                width: MAP_ITEM_SIZE,
                height: MAP_ITEM_SIZE,
            });

            if (inRect) {
                coord = _coord;
            }
        });

        return coord;
    }

    function renderMenu(coord: Coord) {
        global.menuVisible = !global.menuVisible;
        const menu = document.querySelector(".layout .menu") as HTMLDivElement;
        menu.style.left = `${coord.x - 4}px`;
        menu.style.top = `${coord.y + 30}px`;
    }

    return {
        onClickLayout,
    };
}
