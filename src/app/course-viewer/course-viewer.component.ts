import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MediaItemService } from '../media-item.service'
import { QuizzStateService } from './quizz-state.service';

@Component({
  selector: 'app-video-watcher',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.scss']
})
export class CourseViewerComponent implements OnInit {

  // displaying variables
  public courseItem;
  public currentVideoUrl;
  public currentTitle;
  public currentText;
  public score;
  public result_category;
  public result_text = "You're a complete noob.";
  public result_picture;
  public introTitle;
  public introText;

  // toggle elements
  public showQuizzButton = true;
  public isOn: boolean = false;
  public popUpOpen = false;                            // determines if cert-pop pop-up is shown
  public introPopOpen = false;                   // determines if intro-pop pop-up is shown

  // keeping track
  private currentVideo = 1;
  private videosInCourse;                       // amount of videos in this course  
  @ViewChild('quizz') quizzDiv: ElementRef;

  constructor(private route: ActivatedRoute, private mediaItemService: MediaItemService, private quizzStateService: QuizzStateService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      let courseId = params.get('course')
      
      let mediaItems;
      mediaItems = this.mediaItemService.get();
      this.courseItem = mediaItems.find( ({id}) => id == courseId)
      console.log(this.courseItem)
      this.videosInCourse = this.courseItem.videos.length
      this.displayNextpage()


      // set intro pop up on first load
      this.introTitle = this.courseItem.intro.title
      this.introText = this.courseItem.intro.text
      this.introPopOpen = true;
    })
  }
  
  turnQuizzon() {
    this.isOn = true;
    // Todo: find a way to now hardcode the wait time. 
    setTimeout( ()=> this.quizzDiv.nativeElement.scrollIntoView({behavior: "smooth", block: "center"}), 500);
    this.showQuizzButton = false;
  }

  submitClicked(score) {
    this.currentVideo = this.currentVideo + 1;
    this.displayNextpage()
    this.score = score
  }

  displayNextpage() {
    if (this.currentVideo <= this.videosInCourse) {
      const currentVideo = this.courseItem.videos.find( ({id}) => id == this.currentVideo)
      this.currentVideoUrl = currentVideo.url
      this.currentTitle = currentVideo.title
      this.currentText = currentVideo.text
    } else {
      // end of course initiated: calculate score, category and text then display in pop up
      if (this.score > 60 && this.score <= 80) {
        this.setCategory(1)
      } else if (this.score > 40 && this.score <= 60){
        this.setCategory(2)
      } else if (this.score > 20 && this.score <= 40) {
        this.setCategory(3)
      } else {
        this.setCategory(3)
      }
      this.openPopUp()
    }
  }

  setCategory(cat_id) {
    const category = this.courseItem.result_categories.find( ({id}) => id == cat_id)
    this.result_category = category.description
    this.result_text = category.text
    this.result_picture = category.picture
  }

  openPopUp() {
    this.popUpOpen = true;
  }

  okPressed() {
    this.popUpOpen = false;
    this.quizzStateService.resetHomoScore()
  }

  introOk() {
    this.introPopOpen = false;
  }
}
