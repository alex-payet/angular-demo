import { Injectable } from '@angular/core';
import { Chapter, Topic , CardKey} from '../model/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterFactoryService {


  private builder: ChapterBuilder = new ChapterBuilder();

  constructor() {
    this.build();
  }

  get(): Array<Chapter> {
    return this.builder.get();
  }

  private build(): void {
    this.builder.create('Installation', 'Logiciels & Co.')
      .add('node', ['V8 : JavaScript open-source', 'Exécution côté serveur'], false)
      .add('npm', ['Gestionnaire de paquet', 'npm install -g @angular/cli', 'alias : npm -i *paquet*'])
      .add('angular-project', ['ng new project-name', 'ng generate ...'])
      .add('chrome', ['Chromium', 'Chromium/Edge'], false)
      .add('ide', ['Visual Studio Code', 'IntellJ', 'Eclipse', 'Netbean'], false)
      .flush()
      .create('Prérequis', 'Quelques notions ...')
      .add('html', ['Structure', 'Génériques', 'Tableau', 'Formulaire'])
      .add('css', ['Sélecteurs', 'Exemples', 'Framworks'])
      .add('javascript', ['Variable', 'Fonction', 'Evenement', 'Objet'])
      .add('typescript', ['Interfaces vs Classes', 'Les fonctions', 'Le typage', 'Import'])
      .flush()
      .create('Projet', 'Structure et fichier (super) important')
      .add('project', ['node_modules', 'app', 'dist', 'assets'], false)
      .add('angular', ['Modules', 'Composants', 'Services', 'Routing'])
      .flush()
      .create('Composant', 'Le vif du sujet')
      .add('component', ['Binding', 'Directive', 'Pipes ...'])
      .add('component-detailed', ['Lifecycle', 'Communication'])
      .add('test', ['Karma / Jasmin', 'Fichier *.spec.ts', 'e2e'], false)
      .flush()
      .create('Asynchronisme', 'J\'ai encore le temps ...')
      .add('promise', ['Exemple', 'Async / Await'])
      .add('rxjs', ['Observable', 'Subject', 'Operateur', 'Formulaire réactive'])
      .flush()
      ;
  }

}

class ChapterBuilder {

  private chapters: Array<Chapter> = [];
  private chapter: Chapter = new Chapter();

  create(title: string, description: string): ChapterBuilder {
    this.chapter = new Chapter();
    this.chapter.title = title;
    this.chapter.description = description;
    this.chapter.topics = [];
    return this;
  }

  add(name: CardKey, infos: Array<string>, ex: boolean = true): ChapterBuilder {
    const topic = new Topic();
    topic.key = name;
    topic.example = ex;
    topic.logo = 'assets/img/ico/' + name + '.svg';
    topic.infos = infos;
    this.chapter.topics.push(topic);
    return this;
  }

  flush(): ChapterBuilder {
    const clone: Chapter = JSON.parse(JSON.stringify(this.chapter));
    this.chapters.push(clone);
    this.chapter = new Chapter();
    return this;
  }

  get(): Array<Chapter> {
    return this.chapters;
  }
}