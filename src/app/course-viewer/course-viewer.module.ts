import { NgModule } from "@angular/core";
import { VideoWatcherComponent } from './course-viewer.component';
import { CommonModule } from '@angular/common';
import { videoWatcherRouting } from './course-viewer.routing';
import { PipesModule } from '../pipes/pipes.module';
import { QuizzComponent } from './quizz.component';
import { MatSliderModule } from '@angular/material/slider'

@NgModule({
    imports:[
        CommonModule,
        PipesModule,
        MatSliderModule,
        videoWatcherRouting
    ],
    declarations: [
        VideoWatcherComponent,
        QuizzComponent
    ]
})

export class VideoWatcherModule {};