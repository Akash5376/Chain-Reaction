import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withDebugTracing } from '@angular/router';
import { appRoutes } from './app/app-routing/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withDebugTracing()), // Providing the router
    provideAnimations()
  ]
}).catch(err => console.error(err));


  
