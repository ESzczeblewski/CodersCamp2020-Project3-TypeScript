import Entity from "./Entity";

export default abstract class Component {
    public entity: Entity | null = null;
}