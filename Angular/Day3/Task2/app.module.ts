import { formatNumber } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlicepipeComponent } from './slicepipe/slicepipe.component';
import { EmpinfoComponent } from './empinfo/empinfo.component';
import { GradePipe } from './grade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SlicepipeComponent,
    EmpinfoComponent,
    GradePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
