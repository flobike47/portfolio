import { Skill_service } from "../services/skill_service.ts";
import { Skill } from "../models/Skill.ts";
import { Skill_type } from "../models/enum/Skill_type.ts";

const skill_service: Skill_service = Skill_service.getInstance();

export function header(): string {
    const skills: Skill[] = skill_service.skills?.skills || [];
    const technicalSkills = skills.filter(skill => skill.type === Skill_type.HARD_SKILL);
    const humanSkills = skills.filter(skill => skill.type === Skill_type.SOFT_SKILL);

    const technicalSkillsList = technicalSkills.map(skill => `<li class="py-1"><a href="/skills/${skill.name}" class="block text-base cursor-pointer">${skill.name}</a></li>`).join('');
    const humanSkillsList = humanSkills.map(skill => `<li class="py-1"><a href="/skills/${skill.name}" class="block text-base cursor-pointer">${skill.name}</a></li>`).join('');

    return `
        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><div id="logo"></div></span>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li><a href="" id="github-redirection">GitHub</a></li>
                            <li><a href="" id="LinkedIn-redirection">LinkedIn</a></li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/achievements">Réalisations</a></li>
                        <li class="group relative dropdown">
                            <a href="/skills">Compétences</a>
                            <div class="group-hover:block bg-white shadow dropdown-menu absolute hidden h-auto left-1/2 transform -translate-x-1/2 rounded-md">
                                <div class="flex ">
                                    <ul class="w-48 border-r px-6 py-8">
                                        <li class="font-bold">Compétences Techniques</li>
                                        ${technicalSkillsList}
                                    </ul>
                                    <ul class="w-48  px-6 py-8">
                                        <li class="font-bold">Compétences Humaines</li>
                                        ${humanSkillsList}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const menu = document.getElementById(toggleButton.getAttribute('aria-controls'));

    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('hidden');
    });
});