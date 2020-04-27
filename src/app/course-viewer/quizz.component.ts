import { Component, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { MediaItemService } from '../media-item.service';

@Component({
    selector: 'quizz-component', 
    templateUrl: './quizz.component.html', 
    styleUrls: ['./quizz.component.scss']
})

export class QuizzComponent {
    public currentQuestion: String;
    public answers: String[];
    public quizzType;
    private questionList;
    private videoObject;
    private questionObject;
    @Output() submit = new EventEmitter(); 
  
    constructor(private route: ActivatedRoute, private mediaItemService: MediaItemService) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe( params => {
        // list of questions
        let courseId = params.get('course')

        let mediaItems;
        mediaItems = this.mediaItemService.get();
        let courseDetaisl = mediaItems.find( ({id}) => id == courseId)
        this.quizzType = courseDetaisl['quizzType']
        // todo: don't hardcode
        this.videoObject = courseDetaisl['videos'][1]
        this.questionObject = courseDetaisl['questions'][1]

        this.questionList = courseDetaisl['questions']

        // Todo: load random question
        try {
            this.answers = this.questionList[0].options
            this.currentQuestion = this.questionList[0].question
        } catch (error) {
            console.error(console.error());
        }
      })
    }

    submitClicked() {
      this.submit.emit(this.videoObject);
      this.currentQuestion = this.questionObject.question
    }
}