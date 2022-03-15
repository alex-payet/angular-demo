import { Injectable } from '@angular/core';
import { Chapter } from '../model/chapter.model';
import { ChapterFactoryService } from './chapter-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private _data : Array<Chapter>;

  constructor(private factory: ChapterFactoryService) { 
    this._data = this.factory.get();
  }

  get data( ) : Array<Chapter> {
    return this._data;
  }
}
