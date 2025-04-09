export class Content{
    private _title: string ;
    private _content: string ;

    constructor(name:string, content:string){
        this._title = name;
        this._content = content;
    }


    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }
}