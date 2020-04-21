import {Component} from '@angular/core'

@Component({
    selector: 'mw-media-item', 
    templateUrl: './media-item.component.html', 
    styleUrls: ['./media-item.component.scss']
})

export class MediaItemComponent{
    onDelete(){
        console.log("deleted.")
    }
}
