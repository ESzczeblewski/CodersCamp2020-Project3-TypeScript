import Renderable from "./renderable";
import { Entity } from "./entity"

export default class RenderEngine {

    constructor(private _canvas: HTMLCanvasElement, private _ctx: CanvasRenderingContext2D) {
    }

    public render(entitiesArray: Array<Entity>): void {

        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height); // czyści canvas

        for (const entity of entitiesArray) {
            try {
                let component = entity.getComponent(Renderable);
                component.drawSelf(this._ctx); // obiekty renderują się same (po wybraniu, czym chcą być)
            } catch (err) {
                console.error(`Could not find component of class Renderable in entity: ${entity.constructor.name}`);
            }
        }

    }

}