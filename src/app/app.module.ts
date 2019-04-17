import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    NzButtonModule
  ],
  bootstrap   : [ AppComponent ]
})
export class AppModule {}
