import {Skill} from "./Skill.ts";
import {Skill_type} from "./enum/Skill_type.ts";

export class Skills{
    private _skills: Skill[];


    constructor(skills: Skill[]){
        this._skills = skills;
    }

    get skills(): Skill[] {
        return this._skills;
    }

    get (name: string): Skill | undefined {
        return this._skills.find((skill) => skill.name.toLowerCase() === name.toLowerCase());
    }

    bySkillType(type :Skill_type){
        return this._skills.filter((skill) => skill.type === type)
    }


    set skills(value: Skill[]) {
        this._skills = value;
    }
}