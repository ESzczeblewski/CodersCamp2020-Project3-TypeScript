import { Point, IInputDevice} from "./inputdevice.h"
import { Entity } from "./entity"

// type constr<T> = { new(...args: Array<unknown>): T }

export class CoreEngine {

    private _cursorPosition: Point = {x: 0, y: 0};
    private _prevCursorPosition: Point = {x: 0, y: 0};
    private _entities: Array<Entity> =[];
    // private _audioEngine: AudioEngine = new AudioEngine();
    // private _renderEngine = new RenderEngine();
    // private _uiEngine = new UIEngine();
    // private _physicsEngine = new PhysicsEngine();

    constructor(private _canvas: HTMLCanvasElement, private _controller: IInputDevice) { }

    public get cursorPosition() {
        return this._cursorPosition;
    }

    public get previousCursorPosition() {
        return this._prevCursorPosition;
    }

    // public addEntity<E extends Entity>(constr: constr<E>): E {
    //     return new constr();
    // }

    // public removeEntity(entity: Entity) {

    // }

    public mainLoop(callback = () => {}) {
        
        //add engine components functionality here...

        callback();
    }

    private _readInput(): void {
        this._prevCursorPosition = this._cursorPosition;
        this._cursorPosition = this._controller.getCursorPosition();
    }
}