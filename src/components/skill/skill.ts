import {achievement_button} from "../achievement_button.ts";
import {Skill} from "../../models/Skill.ts";
import {content_display} from "../content.ts";

export function skill(skill : Skill) : string {
    return `
    <div class="flex flex-col items-center">    
    <div class="">
    <h1 class="pb-3.5 pt-3.5">${skill.name}</h1>
    <div id="skill-display" class="flex flex-col">
    ${skill.content?.map((content) =>
        content_display(content)
    ).join('')}
    <div class="flex flex-row flex-wrap">
    ${skill.achievements?.map((achievement) =>
        achievement_button(achievement)
    ).join('')}
    </div>
    </div>
    </div>
    </div>
    `

}
