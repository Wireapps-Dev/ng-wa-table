import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWaTableModule } from 'projects/ng-wa-table/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgWaTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
