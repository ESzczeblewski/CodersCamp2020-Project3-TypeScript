export default class RenderEngine {
    public ctx;

    constructor(public readonly canvas: HTMLCanvasElement) {
        this.ctx = this.canvas.getContext('2d');
    }

    public render(entitiesArray: Array<Entity>): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // czyści canvas
        for (const entity of entitiesArray) {
            entity.components[0].drawSelf(this.ctx); // obiekty renderują się same (po wybraniu, czym chcą być)
        }
    }
}