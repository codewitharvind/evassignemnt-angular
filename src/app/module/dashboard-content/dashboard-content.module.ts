/*
#############################################################################
# Name : dashboard-content.module.ts
# Created by : Arvind Yadav
# Date       : 2nd Sept 2023
# Purpose    : This file is used to provide dashboard file access
#############################################################################
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgChartsModule
  ]
})
export class DashboardContentModule { }
