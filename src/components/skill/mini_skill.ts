import {Skill} from "../../models/Skill.ts";

export function mini_skill(skill: Skill) {
    return `
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
    <a href="./skills/${skill.name}" class="block h-full">
        <div class="flex flex-col h-full text-center items-center hover:scale-110 transition delay-150 duration-150 ease-in-out justify-between p-5">
            <h2 class="text-xl font-bold mb-4">${skill.name}</h2>
            <img src="${skill.image}" class="w-32 h-32 object-contain p-3.5 mb-4" alt="${skill.name}">
            <p class="flex-grow">${skill.description}</p>
        </div>
    </a>
</div>
    `
}