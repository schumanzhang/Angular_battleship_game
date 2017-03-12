import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameComponent } from './components/start/game.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './layouts/navbar.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
