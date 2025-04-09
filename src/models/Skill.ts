import {Skill_type} from "./enum/Skill_type.ts";
import {Achievement} from "./Achievement.ts";
import {Content} from "./Content.ts";

export class Skill{
    private _name: string ;
    private _type: Skill_type ;
    private _level: number ;
    private _description: string ;
    private _image: string ;
    private _content?: Content[];
    private _achievements?: Achievement[];

    constructor(name:string, type:Skill_type, level:number, description:string, image:string, content?:Content[], achievements?:Achievement[]){
        this._name = name;
        this._type = type;
        this._level = level;
        this._description = description;
        this._image = image;
        this._content = content;
        this._achievements = achievements;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): Skill_type {
        return this._type;
    }

    set type(value: Skill_type) {
        this._type = value;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get content(): Content[] | undefined {
        return this._content;
    }

    set content(value: Content[]) {
        this._content = value;
    }

    get achievements(): Achievement[] | undefined {
        return this._achievements;
    }

    set achievements(value: Achievement[]) {
        this._achievements = value;
    }
}