import { NgModule } from "@angular/core";
import { VideoWatcherComponent } from './video-watcher.component';
import { CommonModule } from '@angular/common';
import { videoWatcherRouting } from './video-watcher.routing';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports:[
        CommonModule,
        PipesModule,
        videoWatcherRouting
    ],
    declarations: [
        VideoWatcherComponent
    ]
})

export class VideoWatcherModule {};