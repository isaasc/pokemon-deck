import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckCreateComponent } from './pages/deck-create/deck-create.component';
import { DeckListComponent } from './pages/deck-list/deck-list.component';

const routes: Routes = [
  // { path: 'list', loadComponent: () => import('./pages/deck-list').then((x) => x.DeckListComponent) },
  // { path: '/list', loadComponent: () => DeckListComponent },
  // { path: '', loadComponent: () => DeckListComponent },
  // { path: '/create', loadComponent: () => DeckCreateComponent },
  { path: '/list', component: DeckListComponent },
  { path: '', component: DeckListComponent },
  { path: '/create', component: DeckCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
