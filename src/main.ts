import { bootstrapApplication } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {provideHttpClient} from '@angular/common/http';
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app-routing.module";
import { importProvidersFrom } from "@angular/core";

// in the main.ts file
bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
  ]
})