export type Point = {
    x: number
    y: number
}

export interface IInputDevice {
    getCursorPoint(): Point
}