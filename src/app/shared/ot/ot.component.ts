/*
#############################################################################
# Name : ot.component.ts
# Created by : Arvind Yadav
# Date       : 1st Sept 2023
# Purpose    : This file is used to design the implement the ot section file
#############################################################################
*/
import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-ot',
  templateUrl: './ot.component.html',
  styleUrls: ['./ot.component.css']
})
export class OtComponent {
  ngOnInit(){
    window.history.pushState( {} , '#', '/OT' );
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [
    'Coding',
    'Cycling',
    'Running',
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
    ],
  };
  public radarChartType: ChartType = 'radar';
}
