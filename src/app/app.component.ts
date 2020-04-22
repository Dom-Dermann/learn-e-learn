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
    name: 'Anchor in hope', 
    source: 'https://www.youtube.com/embed/RoSO3_0Ufr0',
    medium: 'Series', 
    category: 'Calm Yoga', 
    year: 2010, 
    watchedOn: null, 
    isFavorite: false
  }

  onMediaItemDelete(mediaItem) {}
}
