import { Routes, RouterModule } from "@angular/router";
import { VideoWatcherComponent } from './course-viewer.component';

const videoWatcherRoutes: Routes = [
    {
        path: '', component: VideoWatcherComponent
    }
]
export const videoWatcherRouting = RouterModule.forChild(videoWatcherRoutes)