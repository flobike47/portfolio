import {content_display} from "../content.ts";
import {Achievement} from "../../models/Achievement.ts";
import {skill_button} from "../skill_button.ts";

export function achievement(achievement : Achievement) : string {
    return `
    <div class="flex flex-col items-center">    
    <div class="">
    <h1 class="pb-3.5 pt-3.5">${achievement.name}</h1>
    <div id="skill-display" class="flex flex-col">
    ${achievement.content.map((content) =>
        content_display(content)
    ).join('')}
    <div class="flex flex-row">
    ${achievement.skills.map((skill) =>
        skill_button(skill)
    ).join('')}
    </div>
    </div>
    </div>
    </div>
    `

}