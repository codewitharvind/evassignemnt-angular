/*
#############################################################################
# Name : settings.component.css
# Created by : Arvind Yadav
# Date       : 1st Sept 2023
# Purpose    : This file is used to design the settings section
#############################################################################
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  ngOnInit(){
    window.history.pushState( {} , '#', '/Settings' );
  }
}
