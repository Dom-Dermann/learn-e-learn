import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { MediaItemService } from '../media-item.service'
import { lookupListToken } from '../providers';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: './media-item-form.component.html',
    styleUrls: ['./media-item-form.component.scss']
})


export class MediaItemFormComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuild: FormBuilder, @Inject(lookupListToken) public lookupLists) {}

    ngOnInit() {
        this.form = this.formBuild.group({
            gender : this.formBuild.control('undefined', Validators.required),
            name : this.formBuild.control('', Validators.compose([
                Validators.required, 
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            email : this.formBuild.control('example@email.com', Validators.compose([
                Validators.required, 
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ])),
            year : this.formBuild.control(''),
        });
    }

    onSubmit(userDetails) {
        console.log(userDetails)
    }
}