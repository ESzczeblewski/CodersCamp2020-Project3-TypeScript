import { Point, IInputDevice } from "./iinputdevice"
import { Entity } from "./entity"
import { Component } from "../src/component"
import RenderEngine from "./renderengine"

export default class CoreEngine {
    
    public cursorPosition: Point = {x: 0, y: 0};
    public prevCursorPosition: Point = {x: 0, y: 0};
    public state = '';
    public entities: Array<Entity> = [];

    private _audioEngine 
    private _renderEngine = new RenderEngine();

    constructor(public readonly canvas, public readonly controller: IInputDevice) {
        this._renderEngine 
    }

    public readInput(): void {
        this.prevCursorPosition = this.cursorPosition;
        this.cursorPosition = this.controller.getCursorPoint()
    }

    public render(): void{
        // this._renderEngine.render()
    }

    //TODO:
    // public addEntity(componentArray: Array<Component>): Entity{
    //     const entity = new Entity(componentArray);

    // }
}