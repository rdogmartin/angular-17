import { Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: ShoppingListComponent,
        title: 'Shopping List',
      },
    ],
  },
];
