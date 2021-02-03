import PhysicsEngine from "../src/Engine/PhysicsEngine";
import Colidable from "../src/Engine/Colidable"; 
import Entity from "../src/Engine/Entity";

class E extends Entity {};

describe("PhysicsEngine", () => {
    const physicsEngine = new PhysicsEngine();
    const e1 = new E([new Colidable({x:0, y:0},{x:1, y:1},{x:1, y:1})]);
    const e2 = new E([new Colidable({x:2, y:2},{x:1, y:1},{x:1, y:1})]);
    const colidable1 = e1.getComponent(Colidable);
    const colidable2 = e2.getComponent(Colidable);

    physicsEngine.updatePosition([e1,e2]);

    it("should update position", () => {
        expect(colidable1.position).toEqual({x:1, y:1});
        expect(colidable2.position).toEqual({x:3, y:3});
    })

    it("should update velocity", () => {
        expect(colidable1.velocity).toEqual({x:2, y:2});
        expect(colidable2.velocity).toEqual({x:2, y:2});
    })
})