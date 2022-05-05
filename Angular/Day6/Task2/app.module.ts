import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { EmpHttpInterceptorService } from './emp-http-interceptor.service';
import { FilterDataComponent } from './filter-data/filter-data.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    FilterDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass: EmpHttpInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
