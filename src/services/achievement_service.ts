import {Achievement} from "../models/Achievement.ts";
import {Achievements} from "../models/Achievements.ts";

export class Achievement_service {


    protected static instance: Achievement_service;

    public achievements?: Achievements;

    private constructor() {
        this.read_achievements_from_json();
    }

    public static getInstance(): Achievement_service {
        if (!Achievement_service.instance) {
            Achievement_service.instance = new Achievement_service();
        }
        return Achievement_service.instance;
    }

    protected read_achievements_from_json() {
        const jsonModules = import.meta.glob<string>('/data/achievements/*.json', { eager: true, as: 'raw' });
        const extracted_achievements : Achievement[] = [];

        Object.entries(jsonModules).forEach(([path, content]) => {
            const fileName = path.split('/').pop()?.replace('.json', '') || '';
            try {
                const achievement : Achievement = JSON.parse(content);

                extracted_achievements.push(achievement)

            } catch (error) {
                console.error(`Error parsing JSON file ${fileName}:`, error);
            }
        });

        this.achievements = new Achievements(extracted_achievements)
    }
}