import { Routes } from '@angular/router';
import { DeckBuilderComponent } from './pages/deck-builder/deck-builder.component';
import { DeckDetailsComponent } from './pages/deck-details/deck-details.component';
import { DeckListComponent } from './pages/deck-list/deck-list.component';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DeckListComponent },
  { path: 'create', loadComponent: () => DeckBuilderComponent },
  { path: 'details/:id', loadComponent: () => DeckDetailsComponent },
  { path: 'edit/:id', loadComponent: () => DeckBuilderComponent },
];
