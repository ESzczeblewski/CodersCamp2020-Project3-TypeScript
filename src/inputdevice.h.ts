export type Point = {
    x: number,
    y: number
}

export interface IInputDevice {
    getCursorPosition(): Point
}