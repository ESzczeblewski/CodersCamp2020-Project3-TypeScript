import { Point, IInputDevice} from "./inputdevice.h"
import { Entity } from "./entity"

export class CoreEngine {

    private _cursorPosition: Point = {x: 0, y: 0};
    private _prevCursorPosition: Point = {x: 0, y: 0};
    private _entities: Array<Entity> =[];
    private _ctx: CanvasRenderingContext2D | null;
    // private _renderEngine;
    // private _uiEngine;
    // private _physicsEngine = new PhysicsEngine();
    // private _audioEngine: AudioEngine = new AudioEngine();

    constructor(private _canvas: HTMLCanvasElement, private _controller: IInputDevice) { 
        this._ctx = this._canvas.getContext("2d");
        //this._renderEngine = new RenderEngine(this._canvas, this._ctx);
        //this._uiEngine = new UIEngine(this._canvas);
    }

    public get cursorPosition() {
        return this._cursorPosition;
    }

    public get previousCursorPosition() {
        return this._prevCursorPosition;
    }

    public addEntity(entity: Entity): Entity {
        this._entities.push(entity);
        return entity;
    }

    public removeEntity(entity: Entity) {
        const index = this._entities.indexOf(entity);
        if(index)
            this._entities.splice(index, 1);
        else
            throw new Error("This entity does not exist");
    }

    public init(callback = () => {}) {
        window.requestAnimationFrame(() => this._mainLoop(callback))
    }

    private _mainLoop(callback: () => void) {
            // this._physicsEngine.updatePosition(this._entities.filter(entity => entity.hasComponent(Colidable)));
            // this._renderEngine.render(this._entities.filter(entity => entity.hasComponent(Renderable)));
            this._readInput();

            callback();
    }

    private _readInput(): void {

        this._prevCursorPosition = this._cursorPosition;
        this._cursorPosition = this._controller.getCursorPosition();

    }
}