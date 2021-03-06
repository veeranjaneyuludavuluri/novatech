import { NvUiMaterialModule } from './../nv-ui-material/nv-ui-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NvUiMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
