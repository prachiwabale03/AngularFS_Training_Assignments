import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule }  from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatInputModule,MatCardModule,MatToolbarModule
  ],
  exports:[MatButtonModule,MatInputModule,MatCardModule,MatToolbarModule]
})
export class MyMaterialModuleModule { }
