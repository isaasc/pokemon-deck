import { Routes } from '@angular/router';
import { DeckCreateComponent } from './pages/deck-create/deck-create.component';
import { DeckListComponent } from './pages/deck-list/deck-list.component';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DeckListComponent },
  { path: 'create', loadComponent: () => DeckCreateComponent },
];
