import { Component } from './component';
import { Point } from './iinputdevice';

export class Colidable extends Component {

    constructor(public position: Point, public velocity: Point, public gravity : Point) {

        super();
    }
}