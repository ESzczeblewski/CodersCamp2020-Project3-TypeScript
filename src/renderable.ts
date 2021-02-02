import { Component } from "./component";
import { Point } from "./iinputdevice";

export class Renderable extends Component {

    constructor(public position: Point, public color: string = "#000", public drawSelf = (ctx: any) => { // TODO: change any

        ctx.fillStyle = '#cc0000';   
        ctx.fillRect(this.position.x - 1, this.position.y - 1, 2, 2);

    }) {
        super();
    }
}