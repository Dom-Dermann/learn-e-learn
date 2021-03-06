import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { videoWatcherRouting } from './course-viewer.routing';
import { PipesModule } from '../pipes/pipes.module';
import { QuizzComponent } from './quizz.component';
import { MatSliderModule } from '@angular/material/slider'
import { ReactiveFormsModule } from '@angular/forms';
import { CourseViewerComponent } from './course-viewer.component';
import { CertPopComponent } from './cert-pop/cert-pop.component'


@NgModule({
    imports:[
        CommonModule,
        PipesModule,
        MatSliderModule,
        ReactiveFormsModule,
        videoWatcherRouting
    ],
    declarations: [
        CourseViewerComponent,
        QuizzComponent,
        CertPopComponent
    ]
})

export class CourseViewerModule {};