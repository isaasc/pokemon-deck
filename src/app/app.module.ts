import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxButtonModule,
  IgxCardModule,
  IgxSelectModule,
  IgxInputGroupModule,
} from 'igniteui-angular';
import { DeckListComponent } from './pages/deck-list/deck-list.component';
import { DeckCreateComponent } from './pages/deck-create/deck-create.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardService } from './services/card.service';
import { HttpClientModule } from '@angular/common/http';
import { DeckDetailsComponent } from './components/deck-details/deck-details.component';
import { DeckSearchAndFiltersComponent } from './components/deck-search-and-filters/deck-search-and-filters.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeckListComponent,
    DeckCreateComponent,
    CardComponent,
    DeckDetailsComponent,
    DeckSearchAndFiltersComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxButtonModule,
    IgxCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    IgxSelectModule,
    IgxInputGroupModule,
  ],
  providers: [CardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
