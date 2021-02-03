import Component from "./Component";
import { Vector } from "./vector.h";

export default class Renderable extends Component {

    constructor(public position: Vector, public color: string = "#000", public drawSelf = (ctx: CanvasRenderingContext2D) => { // TODO: change any

        ctx.fillStyle = '#cc0000';   
        ctx.fillRect(this.position.x - 1, this.position.y - 1, 2, 2);

    }) {
        super();
    }
}