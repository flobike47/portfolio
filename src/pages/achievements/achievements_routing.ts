
import {not_found} from "../404.ts";
import {decodeAllEncoded} from "../../../main.ts";
import {Achievement_service} from "../../services/achievement_service.ts";
import {achievements} from "./achievements.ts";
import {single_achievement} from "./single_achievment.ts";


export function achievements_routing(achievement_path: string){
    console.log(achievement_path)
    switch (achievement_path){
        case '/':
            return achievements();
            break;
        case '':
            return achievements();
            break;
        default:
            const skill_name : string = decodeAllEncoded(achievement_path.split("/")[1])
            if (Achievement_service.getInstance().achievements?.get(skill_name) === undefined){
                return not_found()
            }
            return single_achievement(skill_name)
            break;
    }
}