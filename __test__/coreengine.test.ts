/**
 * @jest-environment jsdom
 */

import { CoreEngine } from "../src/coreengine";
import { Entity } from "../src/entity";
import { Point, IInputDevice } from "../src/inputdevice.h";

describe("CoreEngine", () => {
    
    class GameObject extends Entity {};
    const obj1 = new GameObject();
    const obj2 = new GameObject();
    
    document.body.innerHTML = '<canvas id="canvas"></canvas>';
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    
    
    class mockMouse implements IInputDevice {
        getCursorPosition(): Point {
            return {x: 1, y: 1};
        }
    }
    
    const engine = new CoreEngine(canvas, new mockMouse());

    it("adds entities to array of entities", () => {
        expect(engine.entities).toStrictEqual([]);
        expect(engine.addEntity(obj1)).toBe(obj1);
        expect(engine.addEntity(obj2)).toBe(obj2);
        expect(engine.entities).toStrictEqual([obj1, obj2]);
    });
    
    it("removes entities from array of entities", () => {
        engine.removeEntity(obj1);
        expect(engine.entities).toStrictEqual([obj2]);
    });
    
})