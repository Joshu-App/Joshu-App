import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import {MatButtonModule, MatMenuModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ParticlesModule } from 'angular-particle';
import { CharacterImageComponent } from './character-image/character-image.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterImageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    ParticlesModule, 
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
