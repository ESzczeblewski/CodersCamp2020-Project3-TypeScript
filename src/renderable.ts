export default class Renderable extends Component {

    constructor(public position: Point, public color: string = "#000", public drawSelf = (ctx) => {

        ctx.fillStyle = '#cc0000';   
        ctx.fillRect(this.position.x, this.position.y, 3, 3);
        
    }) {
        super();
    }
}