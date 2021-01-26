import { Point, IInputDevice } from "./iinputdevice"
import { Entity } from "./entity"
import { Component } from "../src/component"

export default class CoreEngine {
    
    public cursorPosition: Point = {x: 0, y: 0};
    public prevCursorPosition: Point = {x: 0, y: 0};
    public state = '';
    public entities: Array<Entity> = [];

    constructor(public readonly canvas, public readonly controller: IInputDevice) {
        
    }

    public readInput(): void {
        this.prevCursorPosition = this.cursorPosition;
        this.cursorPosition = this.controller.getCursorPoint()
    }

    // public addEntity(componentArray: Array<Component>): Entity{
    //     const entity = new Entity(componentArray);

    // }
}