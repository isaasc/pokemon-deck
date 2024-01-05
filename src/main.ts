import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IgxNavbarModule, IgxIconModule, IgxButtonModule, IgxCardModule, IgxSelectModule, IgxInputGroupModule, IgxRippleModule, IgxForOfModule, IgxListModule, IgxPaginatorModule, IgxExpansionPanelModule, IgxLayoutModule } from 'igniteui-angular';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CardService } from './app/services/card.service';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, IgxNavbarModule, IgxIconModule, IgxButtonModule, IgxCardModule, ReactiveFormsModule, IgxSelectModule, IgxInputGroupModule, IgxRippleModule, IgxForOfModule, IgxListModule, IgxPaginatorModule, IgxExpansionPanelModule, IgxLayoutModule),
        CardService,
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
  .catch(err => console.error(err));
