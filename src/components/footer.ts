import {Skill_service} from "../services/skill_service.ts";
import {Achievement_service} from "../services/achievement_service.ts";
import {Skill} from "../models/Skill.ts";
import {Skill_type} from "../models/enum/Skill_type.ts";

import imageUri from "../assets/65F146E1-3F88-47CD-9629-7A164D554C71.JPG";


const skill_service: Skill_service = Skill_service.getInstance();
const achievement_service: Achievement_service = Achievement_service.getInstance();

export function footer(): string {
    // Récupération et filtrage des compétences (comme dans le header)
    const skills: Skill[] = skill_service.skills?.skills || [];
    const technicalSkills = skills.filter(skill => skill.type === Skill_type.HARD_SKILL);
    const humanSkills = skills.filter(skill => skill.type === Skill_type.SOFT_SKILL);
    const allAchievements = achievement_service.achievements?.achievements || [];

    // Génération des listes de liens dynamiques
    const technicalSkillsLinks = technicalSkills.map(skill =>
        `<li class="py-1"><a href="/skills/${skill.name}" class="hover:underline"></span>${skill.name}</a></li>`
    ).join('');

    const humanSkillsLinks = humanSkills.map(skill =>
        `<li class="py-1"><a href="/skills/${skill.name}" class="hover:underline"></span>${skill.name}</a></li>`
    ).join('');

    const achievementLinks = allAchievements.map(achievement =>
        `<li class="py-1"><a href="/achievements/${achievement.name}" class="hover:underline"></span>${achievement.name}</a></li>`
    ).join('');

    // Année actuelle pour le copyright
    const currentYear = new Date().getFullYear();

    return `
<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600 mt-10">
    <div class="max-w-screen-xl mx-auto p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0 md:w-1/4">
                 <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><div id="logo-footer"> <img src="${imageUri}" class="w-3/4 rounded-md shadow-lg" alt="profile picture"></div></span>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:w-3/4">
                <div>
                    <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-2">
                            <a href="/" class="hover:underline">Accueil</a>
                        </li>
                        <li class="mb-2">
                            <a href="/présentation/" class="hover:underline">Présentation</a>
                        </li>
                        <li class="mb-2">
                            <a href="/parcours/" class="hover:underline">Parcours</a>
                        </li>
                        <li class="mb-2">
                            <a href="/skills/" class="hover:underline">Compétences</a>
                        </li>
                        <li class="mb-2">
                            <a href="/achievements/" class="hover:underline">Réalisations</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Compétences</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                         <li class="mb-2">
                            <a href="/skills" class="hover:underline">Toutes les compétences</a>
                        </li>
                        <li class="font-semibold text-xs uppercase mt-2 mb-1 text-gray-700 dark:text-gray-300">Techniques</li>
                        ${technicalSkillsLinks}
                         <li class="font-semibold text-xs uppercase mt-2 mb-1 text-gray-700 dark:text-gray-300">Humaines</li>
                        ${humanSkillsLinks}
                    </ul>
                </div>
                <div>
                    <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Réalisations</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-2">
                            <a href="/achievements" class="hover:underline">Toutes les réalisations</a>
                        </li>
                         <li class="font-semibold text-xs uppercase mt-2 mb-1 text-gray-700 dark:text-gray-300">Projets</li>
                        ${achievementLinks}
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© ${currentYear} <a href="/" class="hover:underline">fb-cloud.fr™</a>. Tous droits réservés.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
                 <a href="" id="github-redirection" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      GitHub
                      <span class="sr-only">GitHub page</span>
                 </a>
                 <a href="" id="LinkedIn-redirection" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      LinkedIn
                      <span class="sr-only">LinkedIn</span>
                 </a>
            </div>
        </div>
    </div>
</footer>
    `;
}