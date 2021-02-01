export default class PhysicsEngine {

    constructor(private readonly canvas: HTMLCanvasElement) {

        this.ctx = this.canvas.getContext('2d');
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
    }

    public UpdatePosition(entitiesArray: Array<Entity>:) Array<Entity>  {
        for (const entity of entitiesArray) {
            
            entity.component[1].position.x += entity.component[1].velocity.x;
            entity.component[1].position.y += entity.component[1].velocity.y;
            entity.component[1].velocity.y += entity.component[1].gravity;
            
            entity.component[1].velocity.x = randomXV(entity.component[1].position.x);
            entity.component[1].velocity.y = random(1,2);

            entity.component[1].velocity.x *= 0.99; // air resistance
        }
    }
    
    private randomXV(x : number) {
        if (x > this.width / 2) {
            return Math.random(-1.5, 0);
        } else {
            return Math.random(0, 1.5);
        }
    }
}
