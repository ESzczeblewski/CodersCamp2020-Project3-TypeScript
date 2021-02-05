import Component from './Component';
import { Vector } from '../Utils/vector.h';

export default class Colidable extends Component {

    constructor(public position: Vector, public velocity: Vector, public gravity : Vector) {

        super();
    }
}