import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  IgxButtonModule,
  IgxCardModule,
  IgxExpansionPanelModule,
  IgxForOfModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxLayoutModule,
  IgxListModule,
  IgxNavbarModule,
  IgxPaginatorModule,
  IgxRippleModule,
  IgxSelectModule,
} from 'igniteui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { DeckDetailsComponent } from './components/deck-details/deck-details.component';
import { DeckSearchAndFiltersComponent } from './components/deck-search-and-filters/deck-search-and-filters.component';
import { HeaderComponent } from './components/header/header.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { DeckCreateComponent } from './pages/deck-create/deck-create.component';
import { DeckListComponent } from './pages/deck-list/deck-list.component';
import { CardService } from './services/card.service';

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
    MiniCardComponent,
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
    IgxRippleModule,
    IgxForOfModule,
    IgxListModule,
    IgxPaginatorModule,
    IgxExpansionPanelModule,
    IgxLayoutModule,
  ],
  providers: [CardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
