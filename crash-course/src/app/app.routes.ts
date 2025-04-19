import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/body/body.component').then((m) => m.BodyComponent)
    }
  },
  {
    path: 'test',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/parent/parent.component').then((m) => m.ParentComponent)
    },
  },
  {
    path: 'example',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/http-example/http-example.component').then((m) => m.HttpExampleComponent)
    }
  }
];
