import { Routes, RouterModule } from '@angular/router'
import { MediaItemFormComponent } from './media-item-form.component'

const subscribeRoutes: Routes = [
    { path : '', component: MediaItemFormComponent }
]

export const subscribeRouting = RouterModule.forChild(subscribeRoutes)