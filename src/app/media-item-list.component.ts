import { Component, OnInit } from '@angular/core'
import { MediaItemService } from './media-item.service'
import { Router } from '@angular/router'

@Component({
    selector: "mw-media-item-list", 
    templateUrl: "./media-item-list.component.html", 
    styleUrls: ["./media-item-list.component.scss"]
})

export class MediaItemListComponent implements OnInit{

    mediaItems;

    constructor(private mediaItemService: MediaItemService, private router: Router) {}

    ngOnInit() {
        this.mediaItems = this.mediaItemService.get();
    }

    onMediaItemDelete(mediaItem) {}
    onMediaItemWatch(mediaItem) {
        this.router.navigate(['/courses', mediaItem.id]);
    }
}
