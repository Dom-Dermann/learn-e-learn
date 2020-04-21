import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ng-training';

  firstMediaItem = {
    id: 1, 
    name: 'Firebug', 
    source: 'https://www.youtube.com/embed/RoSO3_0Ufr0',
    medium: 'Series', 
    category: 'Science Fiction', 
    year: 2010, 
    watchedOn: 1294532092, 
    isFavorite: false
  }

  onMediaItemDelete(mediaItem) {}
}
