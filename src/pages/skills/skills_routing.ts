import {skills} from "./skills.ts";
import {Skill_service} from "../../services/skill_service.ts";
import {single_skill} from "./single_skill.ts";
import {not_found} from "../404.ts";
import {decodeAllEncoded} from "../../../main.ts";


export function skills_routing(skill_path: string){
    switch (skill_path){
        case '/':
            return skills();
            break;
        case '':
            return skills();
            break;
        default:
            const skill_name : string = decodeAllEncoded(skill_path.split("/")[1])
            if (Skill_service.getInstance().skills?.get(skill_name) === undefined){
                return not_found()
            }
            return single_skill(skill_name)
            break;
    }
}