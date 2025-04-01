import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  ...appConfig, // Mantém as configurações existentes
  providers: [...(appConfig.providers || []), importProvidersFrom(HttpClientModule)] // Adiciona o HttpClientModule corretamente
})
  .catch(err => console.error(err));

