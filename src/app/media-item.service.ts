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
            quizzType: 'multiple',
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
            isFavorite: false
        },
        {
            id: 4, 
            name: 'What home office level do you have?', 
            source: 'https://www.youtube.com/embed/yhB2z9XquUU',
            videos: [
                {
                    id: 1, 
                    title: "Improve your home office",
                    url: "https://www.youtube.com/embed/yhB2z9XquUU"
                },
                {
                    id: 2, 
                    title: "Is course is awesome!",
                    url: "https://www.youtube.com/embed/5dsGWM5XGdg"
                }
            ],
            medium: '', 
            category: 'Quizz',
            isFavorite: true,
            quizzType: 'slider', 
            questions: [
                {
                    id: 1, 
                    question: "How would you rate your home office skills?"
                },
                {
                    id: 2, 
                    question: "How do you like this course?"
                }
            ]
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