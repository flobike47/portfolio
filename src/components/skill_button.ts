import {Achievement} from "../models/Achievement.ts";
import {Skill} from "../models/Skill.ts";

export function skill_button(skill: Skill) : string {
    return `
    <a href="../skills/${skill.name}" class="inline-block bg-secondary-color hover:bg-emerald-400 font-bold py-2 px-4 rounded-lg mr-5 my-5 text-center transition duration-300 ease-in-out text-white">
        ${skill.name}
    </a>
    `

}