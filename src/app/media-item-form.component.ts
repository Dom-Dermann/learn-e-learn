import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { MediaItemService } from './media-item.service'
import { lookupListToken } from './providers';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: './media-item-form.component.html',
    styleUrls: ['./media-item-form.component.scss']
})


export class MediaItemFormComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuild: FormBuilder, private mediaItemService: MediaItemService, @Inject(lookupListToken) public lookupLists) {}

    ngOnInit() {
        this.form = this.formBuild.group({
            medium : this.formBuild.control('Single'),
            name : this.formBuild.control('', Validators.compose([
                Validators.required, 
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category : this.formBuild.control(''),
            year : this.formBuild.control(''),
        });
    }

    onSubmit(mediaItem) {
        this.mediaItemService.add(mediaItem)
    }
}