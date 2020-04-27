import { Routes, RouterModule } from '@angular/router'
import { MediaItemListComponent } from './media-item-list.component';
import { AboutComponent } from './about.component';

const appRoutes: Routes = [
    {
        path: 'subscribe', 
        loadChildren: () => import('./subscribe-page/subscribe.module')
            .then(m => m.SubscriptionModule)
    },
    {   
        path : 'courses/:course', 
        loadChildren: () => import('./course-viewer/course-viewer.module')
            .then(m => m.VideoWatcherModule)
    },
    { path : 'home', component: MediaItemListComponent},
    { path : 'about', component: AboutComponent},
    { path : '', redirectTo: 'home', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);