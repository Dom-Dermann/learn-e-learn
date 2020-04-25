import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class MediaItemService {

    mediaItems = [
        {
            id: 1, 
            name: 'Anchor in hope', 
            source: 'https://www.youtube.com/embed/RoSO3_0Ufr0',
            medium: 'Series', 
            category: 'Calm Yoga', 
            year: 2010, 
            watchedOn: null, 
            isFavorite: false,
            questions: [
                {
                    id: 1, 
                    question: "What color shirt did Adrian wear in the video?",
                    correct: "red",
                    options: ["green", "purple", "turquois"]
                }
            ]
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
    ];

    get() {
        return this.mediaItems
    }

    add(mediaItem) {
        this.mediaItems.push(mediaItem)
    }

    delete(mediaItem) {
        const index = this.mediaItems.indexOf(mediaItem);
        if (index >=0) {
            this.mediaItems.splice(index, 1);
        }
    }

}