import {Achievement} from "../models/Achievement.ts";

export function achievement_button(achievement: Achievement) : string {
    return `
    <a href="../achievments/${achievement.name}" class="inline-block bg-secondary-color hover:bg-emerald-400 font-bold py-2 px-4 rounded-lg mr-5 my-5 text-center transition duration-300 ease-in-out text-white">
        ${achievement.name}
    </a>
    `

}