import {generic_button} from "../../components/generic_button.ts";
import {Skill_service} from "../../services/skill_service.ts";
import {Achievement_service} from "../../services/achievement_service.ts";
import {mini_skill} from "../../components/skill/mini_skill.ts";
import {mini_achievement} from "../../components/achievement/mini_achievement.ts";
import {Skill_type} from "../../models/enum/Skill_type.ts";

import imageUri from "../../assets/65F146E1-3F88-47CD-9629-7A164D554C71.JPG";

const skill_service : Skill_service = Skill_service.getInstance();
const achievment_service : Achievement_service = Achievement_service.getInstance();

export function home() : string {
    const hard_skills = skill_service.skills?.bySkillType(Skill_type.HARD_SKILL) || [];
    const soft_skills = skill_service.skills?.bySkillType(Skill_type.SOFT_SKILL) || [];
    const displayed_skills = [...hard_skills.slice(0, 2), ...soft_skills.slice(0, 1)];

    return `
    <div id="home-display" class="w-full h-full bg-gray-100">
        <div class="flex items-center justify-around text-3xl flex-row w-full h-1/4 p-5 bg-white shadow-md">
            <img src="${imageUri}" class="w-1/4 rounded-md shadow-lg" alt="profile picture">
            <h5 class="font-semibold text-gray-700">Expert en ingénierie logicielle</h5>
        </div>

       <div class="flex flex-col items-center mt-10">
            <h2 class="text-3xl font-bold p-10 bg-secondary-color text-white rounded-md w-3/4 text-center shadow-md">Aperçu de mes compétences</h2>
            <div class="flex flex-wrap -mx-2 items-start align-top flex-row w-3/4 mt-5">
                ${displayed_skills.map((skill) => mini_skill(skill)).join("")}
            </div>
            ${generic_button("Voir mes compétences", "/skills")}
        </div>

        <div class="flex flex-col items-center mt-10">
            <h2 class="text-3xl font-bold p-10 bg-secondary-color text-white rounded-md w-3/4 text-center shadow-md">Aperçu de mes réalisations</h2>

            <div class="flex flex-wrap -mx-2 items-start align-top flex-row w-3/4 mt-5">
                ${achievment_service.achievements?.achievements.map((achievement) => mini_achievement(achievement)).join("")}
            </div>
            ${generic_button("Voir mes réalisations", "/achievements")}
        </div>
    </div>`;
}