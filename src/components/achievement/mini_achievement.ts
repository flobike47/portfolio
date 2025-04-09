import {Achievement} from "../../models/Achievement.ts";

export function mini_achievement(achievement: Achievement) {
    return `
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
    <a href="./achievements/${achievement.name}" class="block h-full">
        <div class="flex flex-col h-full text-center items-center hover:scale-110 transition delay-150 duration-150 ease-in-out justify-between p-5">
            <h2 class="text-xl font-bold mb-4">${achievement.name}</h2>
            <img src="${achievement.image}" class="w-32 h-32 object-contain p-3.5 mb-4" alt="${achievement.name}">
            <p class="flex-grow">${achievement.description}</p>
        </div>
    </a>
</div>
    `
}