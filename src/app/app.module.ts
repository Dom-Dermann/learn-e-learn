import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component'
import { MediaItemListComponent } from './media-item-list.component'
import { SafePipe } from './url-sanitizer-pipe';
import { FavoriteDirective } from './favorite.directive';
import { categoryListPipe } from './category-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent, 
    MediaItemListComponent,
    FavoriteDirective,
    categoryListPipe,
    SafePipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
