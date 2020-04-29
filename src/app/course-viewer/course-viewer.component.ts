import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MediaItemService } from '../media-item.service'

@Component({
  selector: 'app-video-watcher',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.scss']
})
export class CourseViewerComponent implements OnInit {

  public courseItem;
  public currentVideoUrl;
  public isOn: boolean = false;
  private currentVideo = 1;
  private videosInCourse;                       // amount of videos in this course  
  @ViewChild('quizz') quizzDiv: ElementRef;

  constructor(private route: ActivatedRoute, private mediaItemService: MediaItemService) { }

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

  submitClicked(videoject) {
    this.currentVideo = this.currentVideo + 1;
    this.displayNextpage()
  }

  displayNextpage() {
    if (this.currentVideo <= this.videosInCourse) {
      const currentVideo = this.courseItem.videos.find( ({id}) => id == this.currentVideo)
      this.currentVideoUrl = currentVideo.url
    } else {
      console.log("End of course reached.")
    }
  }
}
