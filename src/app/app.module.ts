import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { TheBasicsModule } from './components/sections/the-basics/the-basics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TheBasicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
