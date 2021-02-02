import { Component } from './component';
import { Point } from './inputdevice.h';

export class Colidable extends Component {

    constructor(public position: Point, public velocity: Point, public gravity : Point) {

        super();
    }
}