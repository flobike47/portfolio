import {skill} from "../../components/skill/skill.ts";
import {Skill_service} from "../../services/skill_service.ts";
const skill_service : Skill_service = Skill_service.getInstance()

export function single_skill(skill_name: string) :string{
    return skill(skill_service.skills?.get(skill_name)!);
}