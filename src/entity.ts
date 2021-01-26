export abstract class Entity {
    constructor(public componentsArrar){
        // engine.addEntity(this);
    }
}
// //mockcode

// // component.ts

// interface IUpdatable {
//     update()
// }

// abstract class Component implements IUpdatable {
//     update(timeFromLastUpdate){

//     }
// }

// class hasPosition extends Component {
//     constructor(protected position, protected velocity = {x: 0, y: 0}) {
//         super();
//     }
    
//     update(timeFromLastUpdate) {
//         this.position += this.velocity * timeFromLastUpdate
//     }
// }

// // src/game.ts

// class Bubble extends Entity() {
//     constructor(color, velocity, position){

//         super([
//             new hasColor(color), 
//             new hasPosition(position, velocity),
//             new colidable()
//         ])
//     }

// }

// const redBubble = new Bubble("red");

// if (bombelekTakeHit){
//     redBubble.RemoveComponent(colidable);
//     redBubble.RemoveComponent(hasColor);
// }
// // engine.addEntity(redBubble);

