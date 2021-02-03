import { Vector } from "./vector.h"

export interface IPointerDevice {
    getCursorPosition(): Vector
}