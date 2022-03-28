import { Injectable } from '@angular/core';
import { CardKey, Chapter, Topic } from '../model/chapter.model';
import { ChapterFactoryService } from './chapter-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private _datas : Array<Chapter>;

  constructor(private factory: ChapterFactoryService) { 
    this._datas = this.factory.get();
  }

  get datas( ) : Array<Chapter> {
    return this._datas;
  }

}
