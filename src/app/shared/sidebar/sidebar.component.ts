/*
#############################################################################
# Name : sidebar.component.ts
# Created by : Arvind Yadav
# Date       : 31st Aug 2023
# Purpose    : This file is used to design the implement the routes file
#############################################################################
*/
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private toogle:HomeComponent) {};

  toggleSideBar(){
    this.toogle.toggleSideBar();
  }

}
