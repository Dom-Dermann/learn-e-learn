import { NgModule } from "@angular/core";
import { VideoWatcherComponent } from './course-viewer.component';
import { CommonModule } from '@angular/common';
import { videoWatcherRouting } from './course-viewer.routing';
import { PipesModule } from '../pipes/pipes.module';
import { QuizzComponent } from './quizz.component';

@NgModule({
    imports:[
        CommonModule,
        PipesModule,
        videoWatcherRouting
    ],
    declarations: [
        VideoWatcherComponent,
        QuizzComponent
    ]
})

export class VideoWatcherModule {};