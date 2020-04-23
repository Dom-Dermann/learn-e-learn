import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { MediaItemService } from '../media-item.service'

@Component({
  selector: 'app-video-watcher',
  templateUrl: './video-watcher.component.html',
  styleUrls: ['./video-watcher.component.scss']
})
export class VideoWatcherComponent implements OnInit {

  public videoSrc;

  constructor(private route: ActivatedRoute, private mediaItemService: MediaItemService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      let videoId = params.get('course')
      
      let mediaItems;
      mediaItems = this.mediaItemService.get();
      let video = mediaItems.find( ({id}) => id == videoId)
      this.videoSrc = video.source
    })
  }



}
