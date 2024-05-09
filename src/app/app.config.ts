
import {ApplicationConfig, importProvidersFrom, SecurityContext} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


import {MarkdownModule, provideMarkdown} from "ngx-markdown";
import {provideClientHydration} from "@angular/platform-browser";
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import {provideContent, withMarkdownRenderer} from "@analogjs/content";


export const appConfig: ApplicationConfig = {
providers: [
provideRouter(routes),
provideClientHydration(),
provideRouter([]),
provideHttpClient(),
provideClientHydration(),
importProvidersFrom(MarkdownModule.forRoot({
})),
provideMarkdown({
sanitize: SecurityContext.NONE
}), provideAnimationsAsync(),
],
};