/**
 * Provides core Enity creation functions and setup/access to Systems
 * @version 01.01.22
 * @author MrH-rezroll
 */
import Input from "./systems/input";
import Physics from "./systems/physics";
import ViewFollow from "./systems/view_follow";
import Entity from "./entities/entity";
import Collision from "./systems/collision";
import EightDirectionController from "./systems/eight_direction_controller";
import Rendering from "./systems/rendering";
import Animation from "./systems/animation";
import Interactions from "./systems/interactions";

export default class ECS{
    static _count: number = 0;
    static _entities: Array<Entity>;
    static collision: Collision;
    static eightDirectionController: EightDirectionController;
    static input: Input;
    static physics: Physics;
    static viewFollow: ViewFollow;
    static rendering: Rendering;
    static animation: Animation;
    static interactions: Interactions;

    /**
     * Initializes Systems
     */
    static InitializeSystems(){
        ECS.collision = new Collision();
        ECS.eightDirectionController = new EightDirectionController();
        ECS.input = new Input();
        ECS.physics = new Physics();
        ECS.viewFollow = new ViewFollow();
        ECS.rendering = new Rendering();
        ECS.animation = new Animation();
        ECS.interactions = new Interactions();
    }

    /**
     * Creates the base Entity.
     * @param name The name of this Entity
     * @param x The x axis position of this Entity
     * @param y The y axis position of this Entity
     * @returns The constructed base Entity
     */
    static Entity(name:string = "Entity", x:number = 0, y:number = 0): Entity {
        if(ECS._entities == undefined){
            ECS._entities = new Array<Entity>();
        }
        let id: string = (new Date()).toString() + (Math.random() * 100000000 | 0).toString() + "_" + ECS._count;
        let entity = new Entity(id, name, x, y);
        ECS._entities.push(entity);
        ECS._count++;
        return ECS._entities[ECS._entities.length-1];
    }
}