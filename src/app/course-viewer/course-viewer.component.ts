import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MediaItemService } from '../media-item.service'

@Component({
  selector: 'app-video-watcher',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.scss']
})
export class VideoWatcherComponent implements OnInit {

  public videoItem;
  public videoSrc;

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
}
