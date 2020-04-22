import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'mw-media-item', 
    templateUrl: './media-item.component.html', 
    styleUrls: ['./media-item.component.scss']
})

export class MediaItemComponent{
    @Input() mediaItem;
    @Output() delete = new EventEmitter();
    @Output() watch = new EventEmitter();

    onDelete(){
        console.log("deleted.")
        this.delete.emit(this.mediaItem);
    }

    onWatch() {
        console.log("watching...");
        this.watch.emit(this.mediaItem.source)
    }
}
