export class Chapter {

    public title: string = "";
    public description: string = "";

    public topics: Array<Topic> = [];

}

export class Topic {
    public key: CardKey = 'empty';
    public logo: string = "";
    public example: boolean = false;

    public infos: Array<string> = [];
}

export type CardKey = 'empty' | 'node' | 'npm' | 'angular'
    | 'navigateur' | 'ide' | 'html' | 'css' | 'javascript' | 'typescript'
    | 'project' | 'component' | 'test' | 'promise' | 'rxjs'
    | 'angular-project' | 'component-detailed';

    