import Renderable from "../Components/Renderable";
import Entity from "../Entity/Entity"

export default class RenderEngine {

    constructor(private _canvas: HTMLCanvasElement, private _ctx: CanvasRenderingContext2D | null) {
    }

    public render(entitiesArray: Array<Entity>): void {
        if(!this._ctx) {
            throw new Error("Canvas context is null / not found");
        }
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height); // czyści canvas

        for (const entity of entitiesArray) {
            try {
                const component = entity.getComponent(Renderable);
                component.drawSelf(this._ctx); // obiekty renderują się same (po wybraniu, czym chcą być)
            } catch (err) {
                console.error(`Could not find component of class Renderable in entity: ${entity.constructor.name}`);
            }
        }

    }

}