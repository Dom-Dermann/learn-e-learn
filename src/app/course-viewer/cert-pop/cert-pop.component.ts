import { Input, Component } from '@angular/core'
import { openCloseShadeAnimation, openCloseAnimation } from './animations-pop';

@Component({
    selector: 'cert-pop', 
    templateUrl: './cert-pop.component.html', 
    styleUrls: ['./cert-pop.component.scss'],
    animations: [
        openCloseAnimation,
        openCloseShadeAnimation
    ]
})

export class CertPopComponent {
    @Input() isOpen = false;
}