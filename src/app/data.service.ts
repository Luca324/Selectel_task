import { Injectable } from '@angular/core';
import { Data } from './interfaces/Data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Data[] {
    return [
      {
        name: 'Item 1',
        value: 20
      },
      {
        name: 'Item 2',
        value: 30
      },
      {
        name: 'Item 3',
        value: 40
      },
    ]
  }
}
