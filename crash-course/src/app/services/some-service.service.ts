import {Injectable} from '@angular/core';
import {item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class SomeServiceService {
  items: Array<item> = [
    {
      name: 'passos',
      description: 'camon'
    },
    {
      name: 'peter',
      description: 'peter dennis'
    },
    {
      name: 'brother',
      description: 'bruda'
    },
    {
      name: 'camon',
      description: 'lolitos'
    },
    {
      name: 'some-text',
      description: 'something'
    }
  ];

  constructor() {
  }
}
