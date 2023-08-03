import { LAYOUT_SIZE } from "@/const";
import { createCanvas } from "@/utils";

export class Base {
    context: CanvasRenderingContext2D = null!;

    // 创建画布
    initLayout() {
        this.context = createCanvas(LAYOUT_SIZE).getContext(
            "2d"
        ) as CanvasRenderingContext2D;
    }

    // 清空画布
    clearLayout() {
        this.context.clearRect(0, 0, LAYOUT_SIZE.width, LAYOUT_SIZE.height);
    }
}
