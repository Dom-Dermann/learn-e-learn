import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component'

import { MediaItemListComponent } from './media-item-list.component'
import { FavoriteDirective } from './favorite.directive';
import { categoryListPipe } from './category-list.pipe';
import { lookupListToken, lookupList } from './providers';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { routing } from './app.routing';
import { PipesModule } from './pipes/pipes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent, 
    MediaItemListComponent,
    FavoriteDirective,
    categoryListPipe,
    NavBarComponent
  ],

  imports: [
    BrowserModule,
    PipesModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupList}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
