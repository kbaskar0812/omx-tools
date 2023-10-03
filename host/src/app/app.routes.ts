import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'test1',
    loadChildren: () => import('test1/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'order-search',
    loadChildren: () =>
      import('order-search/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
