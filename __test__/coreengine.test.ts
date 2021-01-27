/**
 * @jest-environment jsdom
 */
import RenderEngine from "../src/renderengine"
import CoreEngine from "../src/coreengine";
import { Point, IInputDevice } from "../src/iinputdevice";
import { Component } from "../src/component";
import { Entity } from "../src/entity";

document.body.innerHTML = 
    '<canvas id="canvas"></canvas>';
const myCanvas = document.getElementById("canvas")!;
class mockMouse implements IInputDevice {
    getCursorPoint(): Point {
        return {x: 1, y: 1};
    }
}

// class mockComponent extends Component {}
// class mockEntity extends Entity {
//     constructor(public mockComponents: Array<Component>){}
// }

// jest.mock("RenderEngine")
// RenderEngine.render.mock

const engine = new CoreEngine(myCanvas, new mockMouse());

test('initial cursor position',() =>{
    expect(engine.cursorPosition).toMatchObject({x:0, y: 0});
});

test('reads input', () => {
    engine.readInput();
    expect(engine.cursorPosition).toMatchObject({x: 1, y: 1});
    expect(engine.prevCursorPosition).toMatchObject({x:0, y: 0});
});

test('renders', ()=> {

});

// test("pushes entity", () => {
//     expect(engine.entities).toEqual([]);
//     const component1 = new mockComponent();
//     const entity1 = engine.createEntity([component1])
//     expect(entity1).toEqual(new mockEntity([component1]));
//     expect(entity1.mockComponents[0]).toBe(component1);
// });

// test('deletes entity', () => {

// });