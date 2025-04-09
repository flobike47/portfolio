import {Content} from "../models/Content.ts";

export function content_display(content:Content){
    return `
    <div class="content">
        <h2 class="pt-1 pb-1">${content.title}</h2>
        <p>${content.content}</p>
        </br>
    </div>
    `
}