import Colidable from "../Components/Colidable"; 
import Entity from "../Entity/Entity";

export default class PhysicsEngine {

    // private ctx;
    // private width;
    // private height;

    // constructor(private readonly canvas: HTMLCanvasElement) {

    //     this.ctx = this.canvas.getContext('2d')!;
    //     this.width = this.ctx.canvas.width;
    //     this.height = this.ctx.canvas.height;
    // }

    public updatePosition(entitiesArray: Array<Entity>) : void {
        for (const entity of entitiesArray) {

            const component = entity.getComponent(Colidable);
            
            component.position.x += component.velocity.x;
            component.position.y += component.velocity.y;
            component.velocity.y += component.gravity.y;
            component.velocity.x += component.gravity.x;
            
            // component.velocity.x = randomXV(component.position.x);
            // component.velocity.y = random(1,2);

            // component.velocity.x *= 0.99; // air resistance
        }
    }
    
    // private randomXV(x : number) {
    //     if (x > this.width / 2) {
    //         return Math.random(-1.5, 0);
    //     } else {
    //         return Math.random(0, 1.5);
    //     }
    // }
}

