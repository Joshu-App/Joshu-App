import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { MatButtonModule, MatMenuModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ParticlesModule } from 'angular-particle';
import { CharacterImageComponent } from './character-image/character-image.component';
import { CoinsComponent } from './coins/coins.component';
import { ShipImageComponent } from './ship-image/ship-image.component';
import { CharacterDescriptionComponent } from './ship-description/ship-description.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterImageComponent,
    CoinsComponent,
    ShipImageComponent,
    CharacterDescriptionComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    ParticlesModule, 
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
