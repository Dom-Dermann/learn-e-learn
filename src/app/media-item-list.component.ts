import { Component } from '@angular/core'

@Component({
    selector: "mw-media-item-list", 
    templateUrl: "./media-item-list.component.html", 
    styleUrls: ["./media-item-list.component.scss"]
})

export class MediaItemListComponent {
    
    mediaItems = [
        {
            id: 1, 
            name: 'Anchor in hope', 
            source: 'https://www.youtube.com/embed/RoSO3_0Ufr0',
            medium: 'Series', 
            category: 'Calm Yoga', 
            year: 2010, 
            watchedOn: null, 
            isFavorite: false
        },
        {
            id: 2, 
            name: 'Calming Practice', 
            source: 'https://www.youtube.com/embed/Enz98dDXQfY',
            medium: 'Series', 
            category: 'Calm Yoga', 
            year: 2011, 
            watchedOn: null, 
            isFavorite: false
        },
        {
            id: 3, 
            name: 'Yoga For Lower Back', 
            source: 'https://www.youtube.com/embed/2xF_teT2_V0',
            medium: 'Single', 
            category: 'Yoga for Back Pain', 
            year: 2012, 
            watchedOn: null, 
            isFavorite: true
        }
    ]

    onMediaItemDelete(mediaItem) {}
    onMediaItemWatch(link) {
        // implement router to original youtube page
    }
}
