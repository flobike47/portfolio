import {Skills} from "../models/Skills.ts";
import {Skill} from "../models/Skill.ts";
import {Skill_type} from "../models/enum/Skill_type.ts";

export class Skill_service{


    protected static instance: Skill_service;

    public skills?: Skills;

    private constructor() {
        this.read_skills_from_json();
    }

    public static getInstance(): Skill_service {
        if (!Skill_service.instance) {
            Skill_service.instance = new Skill_service();
        }
        return Skill_service.instance;
    }

    protected read_skills_from_json() {
        const jsonModules = import.meta.glob<string>('/data/skills/*/*.json', { eager: true, as: 'raw' });
        const extracted_skills : Skill[] = [];

        Object.entries(jsonModules).forEach(([path, content]) => {
            const fileName = path.split('/').pop()?.replace('.json', '') || '';
            try {
                const skill : Skill = JSON.parse(content);

                if (path.includes('soft')) {
                    skill.type = Skill_type.SOFT_SKILL
                } else {
                    skill.type = Skill_type.HARD_SKILL
                }

                extracted_skills.push(skill)

            } catch (error) {
                console.error(`Error parsing JSON file ${fileName}:`, error);
            }
        });

        this.skills = new Skills(extracted_skills)
    }
}