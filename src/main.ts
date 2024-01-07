import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
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
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { TcgCardService } from './app/services/tcg-card.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      IgxNavbarModule,
      IgxIconModule,
      IgxButtonModule,
      IgxCardModule,
      ReactiveFormsModule,
      IgxSelectModule,
      IgxInputGroupModule,
      IgxRippleModule,
      IgxForOfModule,
      IgxListModule,
      IgxPaginatorModule,
      IgxExpansionPanelModule,
      IgxLayoutModule
    ),
    TcgCardService,
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(APP_ROUTES),
  ],
}).catch(err => console.error(err));
