import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { TextStyleDirective } from './text-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    TextStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
