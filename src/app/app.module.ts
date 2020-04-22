import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component'

import { MediaItemListComponent } from './media-item-list.component'
import { SafePipe } from './url-sanitizer-pipe';
import { FavoriteDirective } from './favorite.directive';
import { categoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent, 
    MediaItemListComponent,
    MediaItemFormComponent,
    FavoriteDirective,
    categoryListPipe,
    SafePipe
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
