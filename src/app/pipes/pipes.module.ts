import { NgModule } from "@angular/core";
import { SafePipe } from './url-sanitizer-pipe';

@NgModule({
    declarations: [ SafePipe ],
    exports: [ SafePipe ]
})

export class PipesModule {}