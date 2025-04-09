import {Skill_service} from "../../services/skill_service.ts";
import {Skill_type} from "../../models/enum/Skill_type.ts";
import {mini_skill} from "../../components/skill/mini_skill.ts";

const skill_service : Skill_service = Skill_service.getInstance();


export function skills(){
    return `
    <div id="skills-display" class="h-full w-full flex items-center flex-col">
    <h1 class="text-4xl font-bold p-20 bg-secondary-color text-white w-full rounded-md text-center">Mes compétences</h1>
    <div class="flex flex-col items-center ">
        <h1 class="p-10 text-center">Compétences techniques</h1>
        <div class="flex flex-wrap -mx-2 items-start align-top flex-row w-fulll">
            ${skill_service.skills?.bySkillType(Skill_type.HARD_SKILL).map((skill) => mini_skill(skill)).join("")}
        </div>
    </div>
    <div class="flex flex-col items-center bg-secondary-color rounded-md w-full text-white">
        <h1 class="p-10 text-center">Compétences humaines</h1>
        <div class="flex flex-wrap -mx-2 items-start flex-row w-full">
            ${skill_service.skills?.bySkillType(Skill_type.SOFT_SKILL).map((skill) => mini_skill(skill)).join("")}
        </div>
    </div>
    </div>`
}

