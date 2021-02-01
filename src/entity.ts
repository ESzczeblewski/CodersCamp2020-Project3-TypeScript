import { Component } from "./component"

type constr<T> = { new(...args: Array<any>): T } //should be unknown, but then error xd

export abstract class Entity {
    private static idPool = 0;
    
    public readonly id: number;
    private _components: Array<Component>;

    constructor(components: Array<Component> = []){
        this.id = Entity.idPool++;
        this._components = components;
    }

    public get components(){
        return this._components;
    }

    public addComponent(component: Component): void {
        this._components.push(component);
        component.entity = this;
    }

    public getComponent<C extends Component>(constr: constr<C>): C {
        for (const component of this._components) {
            if (component instanceof constr) {
                return component as C;
            }
        }
        throw new Error(`Component ${constr.name} not found on Entity ${this.constructor.name}`)
    }

    public removeComponent<C extends Component>(constr: constr<C>): void {
        let toRemove: Component | undefined;    //TODO: check if better union available
        let index: number | undefined;

        for (const component of this._components) {
            if (component instanceof constr) {
                toRemove = component;
                index = this._components.indexOf(component);
                break;
            }
        }

        if(toRemove && index) {
            toRemove.entity = null;
            this._components.splice(index, 1);
        }
    }

    public hasComponent<C extends Component>(constr: constr<C>): boolean {
        for (const component of this._components) {
            if (component instanceof constr) {
                return true;
            }
        }
        return false;
    }
}