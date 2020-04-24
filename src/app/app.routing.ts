import { Routes, RouterModule } from '@angular/router'
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
    {
        path: 'subscribe', 
        loadChildren: () => import('./subscribe-page/subscribe.module')
            .then(m => m.SubscriptionModule)
    },
    {   
        path : 'courses/:course', 
        loadChildren: () => import('./video-watcher/video-watcher.module')
            .then(m => m.VideoWatcherModule)
    },
    { path : ':medium', component: MediaItemListComponent},
    { path : '', redirectTo: 'home', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);