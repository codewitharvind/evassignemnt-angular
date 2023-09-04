/*
#############################################################################
# Name : header.component.ts
# Created by : Arvind Yadav
# Date       : 1st Sept 2023
# Purpose    : This file is used to design the implement the header section file
#############################################################################
*/
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToggleService } from 'src/app/services/toggle.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private serv:ToggleService , private _snackBar: MatSnackBar , private Router:Router) {};
  ngOnInit(){
    console.log();
    
  }
  routingName = this.Router.url == "/" ? "Dashboard" : "Assesment";
  Assestment = "Assestment";
  subRouting = this.Router.url == "/" ? "" : this.Router.url;
  listToggle(){
    document.getElementsByClassName("listToggle")[0].classList.add("toggleblock");
  }

  toggleSideBar(){
    document.getElementsByClassName("listToggle")[0].classList.remove("toggleblock");
    // this.home.removetoggle();
    this.serv.setFunctionCall(true);
  }

  openSnackBar(){
    this._snackBar.open('Export Successfully', '', {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 500,
    });
  }
  
}
