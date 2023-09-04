/*
#############################################################################
# Name : main.ts
# Created by : Arvind Yadav
# Date       : 31st Aug 2023
# Purpose    : This file is used to provide main access
#############################################################################
*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
