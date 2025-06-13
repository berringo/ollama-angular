import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Ollama } from 'ollama';
import { provideMarkdown } from 'ngx-markdown';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(HttpClientModule), importProvidersFrom(Ollama), provideMarkdown(),]
};
