import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MediaItemService } from '../media-item.service'

@Component({
  selector: 'app-video-watcher',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.scss']
})
export class VideoWatcherComponent implements OnInit, AfterViewInit {

  public videoItem;
  public videoSrc;
  public isOn: boolean = false;
  @ViewChild('quizz') quizzDiv: ElementRef;
  @ViewChild('quizzComponent') quizzComponent: ElementRef;

  constructor(private route: ActivatedRoute, private mediaItemService: MediaItemService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      let videoId = params.get('course')
      
      let mediaItems;
      mediaItems = this.mediaItemService.get();
      this.videoItem = mediaItems.find( ({id}) => id == videoId)
      this.videoSrc = this.videoItem.source
    })
  }

  ngAfterViewInit() {
    console.log(this.quizzDiv.nativeElement)
  }
  

  turnQuizzon() {
    this.isOn = true;
    // Todo: find a way to now hardcode the wait time. 
    setTimeout( ()=> this.quizzDiv.nativeElement.scrollIntoView({behavior: "smooth", block: "center"}), 500);
  }

  submitClicked(videoObject) {
    this.videoSrc = videoObject.url
  }
}
