/**
 * The base of all Entities
 * @version 01.01.22
 * @author MrH-rezroll
 */
import { Component } from "../components/component";

/**
 * Defines the properties required of all Entities, and allows Extending class to be grouped by the Entity type
 */
export default class Entity{
    id: string;
    name: string;
    defaultX:number;
    defaultY:number;
    isActive: boolean;
    tag: string;
    components: Object = {Component};

    constructor(id: string, name:string = "Entity", x:number = 0, y:number = 0){
        this.id = id;
        this.name = name;
        this.tag = "";
        this.defaultX = x;
        this.defaultY = y;
        this.isActive = true;
        this.components = {};
    }

    public addComponent(component: Component) {
        let componentAmount:number = 0;
        for(const currComponent in this.components){
            if(this.components[currComponent].componentName == component.componentName){
                componentAmount++;
            }
        }
        let componentSuffix = "";
        if (componentAmount > 0){
            componentSuffix = "_" + componentAmount.toString();
        }
        this.components[component.componentName + componentSuffix] = component;
    }

    public removeComponent(componentName: string){
        delete this.components[componentName];
    }

    public print(){
        console.log(JSON.stringify(this, null, 4));
    }
}