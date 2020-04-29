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

  public courseItem;
  public currentVideoUrl;
  public isOn: boolean = false;
  public score;
  public result_text = "You're a complete noob."
  private currentVideo = 1;
  private videosInCourse;                       // amount of videos in this course  
  popUpOpen = false;                            // determines if cert-pop pop-up is shown
  @ViewChild('quizz') quizzDiv: ElementRef;

  constructor(private route: ActivatedRoute, private mediaItemService: MediaItemService, private quizzStateService: QuizzStateService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      let courseId = params.get('course')
      
      let mediaItems;
      mediaItems = this.mediaItemService.get();
      this.courseItem = mediaItems.find( ({id}) => id == courseId)
      this.videosInCourse = this.courseItem.videos.length
      this.displayNextpage()
    })
  }
  
  turnQuizzon() {
    this.isOn = true;
    // Todo: find a way to now hardcode the wait time. 
    setTimeout( ()=> this.quizzDiv.nativeElement.scrollIntoView({behavior: "smooth", block: "center"}), 500);
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
    } else {
      // end of course initiated
      this.openPopUp()
    }
  }

  openPopUp() {
    this.popUpOpen = true;
  }

  okPressed() {
    this.popUpOpen = false;
    this.quizzStateService.resetHomoScore()
  }
}
