import {Presentation_service} from "../../services/presentation_service.ts";
import {Presentation} from "../../models/Presentation.ts";
import {content_display} from "../../components/content.ts";


export function presentation() : string {
    const presentation_service = Presentation_service.getInstance();
    const presentation : Presentation = presentation_service.presentation!;
    return `
    <div id="home-display" class="w-full h-full">
       <h2 class="text-3xl w-full font-bold p-10 bg-secondary-color text-white rounded-md w-3/4 text-center shadow-md">Ma présentation</h2>
       ${presentation.content?.map((content) =>
        content_display(content)
    ).join('')}
    </div>`;
}