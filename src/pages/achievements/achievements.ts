import {Achievement_service} from "../../services/achievement_service.ts";
import {mini_achievement} from "../../components/achievement/mini_achievement.ts";

const achievement_service : Achievement_service = Achievement_service.getInstance();


export function achievements() {
    return `
        <div id="skills-display" class="h-full w-full flex items-center flex-col">
            <h1 class="text-4xl font-bold p-20 bg-secondary-color text-white w-full rounded-md text-center">Mes réalisations</h1>
            <div class="flex flex-col items-center ">
                <div class="flex flex-wrap -mx-2 items-start align-top flex-row w-fulll">
                    ${achievement_service.achievements?.achievements.map((achievement) => mini_achievement(achievement)).join("")}
                </div>
            </div>
            </div>
    `;
}