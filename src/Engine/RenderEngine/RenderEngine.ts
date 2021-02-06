import Renderable from "../Components/Renderable";
import Colidable from "../Components/Colidable"; 
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
                const component1 = entity.getComponent(Colidable);
                switch(component.shape) {
                    case "SQUARE":
                        this._drawSquare(component1.position.x, component1.position.y, component.size.width, component.size.height);
                        break;
                    case "CIRCLE":
                        this._drawCircle(component1.position.x, component1.position.y, component.size.width);
                        break;
                    default: 
                    this._drawCircle(component1.position.x, component1.position.y, component.size.width);
                }
            } catch (err) {
                console.error(`Could not find component of class Renderable in entity: ${entity.constructor.name}`);
            }
        }

    }

    private _drawSquare(x: number, y: number, width: number, height: number) {
        const square = new Path2D();
        square.rect(x, y, width, height);
        this._ctx!.fillStyle = "red";
        this._ctx!.fill(square);
        this._ctx!.stroke(square);
    }

    private _drawCircle(x: number, y: number, width: number) {
        const circle = new Path2D();
        circle.arc(x, y, width/2, 0, 2 * Math.PI);
        this._ctx!.fillStyle = "green"; //texture
        this._ctx!.fill(circle);        
    }

}