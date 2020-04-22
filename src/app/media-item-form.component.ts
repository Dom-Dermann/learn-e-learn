import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'mw-media-item-form',
    templateUrl: './media-item-form.component.html',
    styleUrls: ['./media-item-form.component.scss']
})


export class MediaItemFormComponent implements OnInit {
    form: FormGroup;
    ngOnInit() {
        this.form = new FormGroup({
            medium : new FormControl('Single'),
            name : new FormControl('', Validators.compose([
                Validators.required, 
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category : new FormControl(''),
            year : new FormControl(''),
        });
    }

    onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}