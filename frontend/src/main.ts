import { MatDialogModule } from '@angular/material/dialog';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(appRoutes),
    importProvidersFrom(MatDialogModule),
  ],
}).catch((err) => console.error(err));
