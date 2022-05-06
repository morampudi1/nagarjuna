import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './chenna/main/main.component';
import { HemaComponent } from './hemanth/hema/hema.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
