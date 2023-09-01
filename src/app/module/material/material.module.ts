import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MaterialRoutingModule } from './material-routing.module';
const AngularMaterials:any =[
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialRoutingModule,
  ],
  exports:[AngularMaterials]
})
export class MaterialModule { }
