import { Component, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { MediaItemService } from '../media-item.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuizzStateService } from './quizz-state.service'

@Component({
    selector: 'quizz-component', 
    templateUrl: './quizz.component.html', 
    styleUrls: ['./quizz.component.scss']
})

export class QuizzComponent {
    public currentQuestion: String;
    public answers: String[];
    public quizzType;
    public score = 0;
    private questionList;
    private videoObject;
    private questionObject;
    formSlide: FormGroup;
    formMultiple: FormGroup;
    @Output() submitScore = new EventEmitter(); 
  
    constructor(private route: ActivatedRoute, private mediaItemService: MediaItemService, private formBuilder: FormBuilder, private quizzStateService: QuizzStateService) { }
  
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

      // initialize forms
      this.formSlide = this.formBuilder.group({
        sliderAnswer : this.formBuilder.control(1, Validators.required)
      })

      this.formMultiple = this.formBuilder.group({
        a : this.formBuilder.control('')
      })

    }

    submitSlideClicked(score) {
      this.submitScore.emit(this.videoObject);
      this.quizzStateService.incrementHomoScore(score.sliderAnswer);
      this.score = this.quizzStateService.getHomoScore();
      this.currentQuestion = this.questionObject.question
    }
}