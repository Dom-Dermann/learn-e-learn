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
            videos: [
                {
                    id: 1, 
                    title: "Adrienne is cool", 
                    url: 'https://www.youtube.com/embed/RoSO3_0Ufr0'
                }
            ],
            category: 'Calm Yoga', 
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
            name: 'Rate your home office skills', 
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