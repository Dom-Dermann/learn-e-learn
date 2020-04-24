import { Component } from "@angular/core";
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
    private questionList: [];
  
    constructor(private route: ActivatedRoute, private mediaItemService: MediaItemService) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe( params => {
        // list of questions
        let courseId = params.get('course')
        
        let mediaItems;
        mediaItems = this.mediaItemService.get();
        let courseDetaisl = mediaItems.find( ({id}) => id == courseId)
        this.questionList = courseDetaisl['questions']

        // Todo: load random question
        if (this.questionList != undefined) {
            this.answers = this.questionList[0].options
            this.currentQuestion = this.questionList[0].question
        }
      })
    }
}