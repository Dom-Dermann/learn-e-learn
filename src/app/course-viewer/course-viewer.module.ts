import { NgModule } from "@angular/core";
import { VideoWatcherComponent } from './course-viewer.component';
import { CommonModule } from '@angular/common';
import { videoWatcherRouting } from './course-viewer.routing';
import { PipesModule } from '../pipes/pipes.module';
import { QuizzComponent } from './quizz.component';
import { MatSliderModule } from '@angular/material/slider'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        PipesModule,
        MatSliderModule,
        ReactiveFormsModule,
        videoWatcherRouting
    ],
    declarations: [
        VideoWatcherComponent,
        QuizzComponent
    ]
})

export class CourseViewerModule {};