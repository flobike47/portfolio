import {Presentation} from "../models/Presentation.ts";
import {Content} from "../models/Content.ts";


export class Presentation_service {


    protected static instance: Presentation_service;

    public presentation?: Presentation;

    private constructor() {
        this.read_presentation_from_json();
    }

    public static getInstance(): Presentation_service {
        if (!Presentation_service.instance) {
            Presentation_service.instance = new Presentation_service();
        }
        return Presentation_service.instance;
    }

    protected read_presentation_from_json() {
        const jsonModules = import.meta.glob<string>('/data/presentation.json', { eager: true, as: 'raw' });
        const extracted_presentation : Content[] = [];

        Object.entries(jsonModules).forEach(([, content]) => {
            try {
                if (typeof content === "string") {
                    JSON.parse(content).content.forEach((item: Content) => {
                        extracted_presentation.push(item);
                    });
                }
            } catch (error) {
                console.error(`Error parsing JSON file :`, error);
            }
        });
        this.presentation = new Presentation(extracted_presentation)
    }
}