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
 } from "igniteui-angular";
import { DeckListComponent } from './pages/deck-list/deck-list.component';
import { DeckCreateComponent } from './pages/deck-create/deck-create.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardService } from './services/card.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeckListComponent,
    DeckCreateComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxButtonModule,
    IgxCardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
