import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';

import { EmpListComponent } from './emp-list/emp-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { LoginComponent } from './login/login.component';
import { FancyCardComponent } from './fancy-card/fancy-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
   
    EmpListComponent,
    StudentsListComponent,
    LoginComponent,
    FancyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
