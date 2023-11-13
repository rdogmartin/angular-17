import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Home page',
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    title: 'Shopping List',
  },
];
