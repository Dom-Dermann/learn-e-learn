import { Routes, RouterModule } from '@angular/router'
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';
import { VideoWatcherComponent } from './video-watcher/video-watcher.component';

const appRoutes: Routes = [
    { path : 'add', component: MediaItemFormComponent},
    { path : ':medium', component: MediaItemListComponent},
    { path : 'courses/:course', component: VideoWatcherComponent},
    { path : '', redirectTo: 'home', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);