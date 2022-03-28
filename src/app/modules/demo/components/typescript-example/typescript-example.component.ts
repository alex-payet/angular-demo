import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apt-typescript-example',
  templateUrl: './typescript-example.component.html',
  styleUrls: ['./typescript-example.component.css']
})
export class TypescriptExampleComponent implements OnInit {

  public interfaceTs : string  = `interface card {
  name: string,
  constructor: string,
  year: number
};`;

  public classTs : string  = `class Topic {
  public readonly key: CardKey;
  public logo: string = "";
  public example: boolean = false;

  public infos: Array<string> = [];

  constructor(key: CardKey) {
    this.key = key;
  }
}

type CardKey = 'empty' | 'node' | 'npm' | 'angular'
    | 'chrome' | 'ide' | 'html' | 'css' | 'javascript' | 'typescript'
    | 'project' | 'component' | 'test' | 'promise' | 'rxjs'
    | 'angular-project' | 'html-balise';`
;

  public fctTs : string  = `public close(): void {
  if (this._ref != null) {
    this._ref.close();
  }
}
  
public add(name: CardKey, infos: Array<string>, ex: boolean = true): ChapterBuilder {
  const topic = new Topic();
  topic.key = name;
  topic.example = ex;
  topic.logo = 'assets/img/ico/' + name + '.svg';
  topic.infos = infos;
  this.chapter.topics.push(topic);
  return this;
}`;

  public accessor : string  = `private _key: CardKey = 'empty';

get key() : CardKey {
  // ....
  return this._key;
}

set key(_key: CardKey) {
  // ....
  this._key = _key;
}

this.topic.key = 'test';
const test : CardKey =  this.topic.key;
  `;

  public typeTs : string  = `string / number / boolean / Enum / Array<T> / type / any / void / `;

  public importTs : string  = `import { Chapter, Topic , CardKey} from '../model/chapter.model';`;

  constructor() { }

  ngOnInit(): void {
  }

}
