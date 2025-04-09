import {Skill} from "./Skill.ts";
import {Content} from "./Content.ts";

export class Achievement{
    private _name: string ;
    private _description: string ;
    private _image: string ;
    private _content?: Content[];
    private _skills?: Skill[];

    constructor(name:string, description:string, image:string, content?:Content[], skills?:Skill[]){
        this._name = name;
        this._description = description;
        this._image = image;
        this._content = content;
        this._skills = skills;
    }



    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get content(): Content[] | undefined {
        return this._content;
    }

    set content(value: Content[]) {
        this._content = value;
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

    get skills(): Skill[] | undefined {
        return this._skills;
    }

    set skills(value: Skill[]) {
        this._skills = value;
    }
}