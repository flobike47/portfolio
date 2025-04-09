import {Achievement} from "./Achievement.ts";

export class Achievements{
    private _achievement: Achievement[];


    constructor(achievement: Achievement[]){
        this._achievement = achievement;
    }

    get achievements(): Achievement[] {
        return this._achievement;
    }

    get (name: string): Achievement | undefined {
        return this._achievement.find((achievement) => achievement.name.toLowerCase() === name.toLowerCase());
    }


    set skills(value: Achievement[]) {
        this._achievement = value;
    }
}