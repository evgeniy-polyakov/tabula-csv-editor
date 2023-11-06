import {FileTypes} from "@/models/FileTypes";
import {IFileParser} from "@/models/IFileParser";

export class AppFile {

    private _database?: IFileParser;

    readonly filename: string;
    readonly extension: string;

    constructor(private readonly file: File) {
        this.filename = file.name.replace(/\.\w*$/, '');
        this.extension = file.name.replace(/^.*\.(\w+)$/, '$1');
    }

    async parse() {
        if (this._database) {
            return;
        }
        const extension = this.extension.toLowerCase();
        const fileType = FileTypes.filter(it => it.extension === extension)[0];
        if (!fileType) {
            throw new Error(`Unknown file extension ${this.file.name}`);
        }
        this._database = fileType.parser();
        const contents = await new Promise<string | ArrayBuffer | null | undefined>(r => {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {
                r(event.target?.result);
            });
            if (this._database?.isBinary) {
                reader.readAsArrayBuffer(this.file);
            } else {
                reader.readAsText(this.file);
            }
        });
        if (!contents) {
            throw new Error(`Cannot read file ${this.file.name}`)
        }
        await this._database.parse(contents);
    }

    async stringify() {
        return this._database?.stringify() ?? '';
    }
}