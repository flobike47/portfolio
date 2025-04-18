import {Content} from "./Content.ts";

export class Presentation{
    private _content?: Content[];


    constructor(content?:Content[]){
        this._content = content;
    }

    get content(): Content[] | undefined {
        return this._content;
    }

    set content(value: Content[]) {
        this._content = value;
    }
}