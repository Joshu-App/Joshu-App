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
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { GamesComponent } from './games/games.component';
import { ShopComponent } from './shop/shop.component';


export const routes: Routes = [
  {path: '', redirectTo: 'character', pathMatch: 'full'},
  {path: 'character', component: CharacterComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'games', component: GamesComponent},
  {path: 'shop', component: ShopComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterImageComponent,
    CoinsComponent,
    ShipImageComponent,
    CharacterDescriptionComponent,
    RankingComponent,
    GamesComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    ParticlesModule, 
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
