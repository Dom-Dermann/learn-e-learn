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
import { lookupListToken, lookupList } from './providers';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { routing } from './app.routing';
import { VideoWatcherComponent } from './video-watcher/video-watcher.component'

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent, 
    MediaItemListComponent,
    MediaItemFormComponent,
    FavoriteDirective,
    categoryListPipe,
    SafePipe,
    NavBarComponent,
    VideoWatcherComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupList}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
