import Renderable from "./renderable";

export default class RenderEngine {
    public ctx;

    constructor(public readonly canvas: HTMLCanvasElement) {
        this.ctx = this.canvas.getContext('2d');
    }

    public render(entitiesArray: Array<Entity>): void {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // czyści canvas

        for (const entity of entitiesArray) {
            try {
                let component = entity.getComponent(Renderable);
                component.drawSelf(this.ctx); // obiekty renderują się same (po wybraniu, czym chcą być)
            } catch (err) {
                console.error(`Could not find component of class Renderable in entity: ${entity.constructor.name}`);
            }
        }

    }

}