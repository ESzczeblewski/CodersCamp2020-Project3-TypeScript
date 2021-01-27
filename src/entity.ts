import CoreEngine from "./coreengine";

export abstract class Entity {
    constructor(private game: CoreEngine, public componentsArrar){
        // game.addEntity(this);
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

// // src/game/bubble/ts

// class Bubble extends Entity() {


//     constructor(game, color, velocity, position){
//         super(
//             game,
//             [
//             new hasColor(color), 
//             new hasPosition(position, velocity),
//             new colidable()
//         ])
//     }

// }

// // src/index.ts

// const game = new Game();

// // src/game.ts !!!!!


// export class Game extends CoreEngine {

    

//     constructor(){
//         super()
//         const redBubble = new Bubble(this, "red", {x:1, y:1}, {x:0, y:0});

//         //dziura w całym
//         const blueBubble = this.addEntity(new Bubble(this, "blue", {x:1, y:1}, {x:0, y:0}))
//     }

//     public init(){
//         this.mainLoop();
//     }

//     private mainLoop(): void {

//         //logika gry
//         if (bombelekTakeHit){
//             redBubble.RemoveComponent(colidable);
//             redBubble.RemoveComponent(hasColor);
//         }
//         //
        
//     }
// }

