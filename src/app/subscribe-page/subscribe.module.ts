import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MediaItemFormComponent } from './media-item-form.component'
import { subscribeRouting } from './subscribe.routing'


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        subscribeRouting
    ],
    declarations: [
        MediaItemFormComponent
    ]
})

export class SubscriptionModule{};