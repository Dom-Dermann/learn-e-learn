import { Routes, RouterModule } from "@angular/router";
import { CourseViewerComponent } from './course-viewer.component'

const videoWatcherRoutes: Routes = [
    { path: ':element', component: CourseViewerComponent }
]
export const videoWatcherRouting = RouterModule.forChild(videoWatcherRoutes)