
/*
#############################################################################
# Name : app-routing.module.ts
# Created by : Arvind Yadav
# Date       : 31st Aug 2023
# Purpose    : This file is used to provide routing details
#############################################################################
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ItComponent } from './shared/it/it.component';
import { OtComponent } from './shared/ot/ot.component';
import { SettingsComponent } from './shared/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "IT",
    component: ItComponent
  },
  {
    path: "OT",
    component: OtComponent
  },
  {
    path: "Settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
