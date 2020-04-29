import { Input, Component } from '@angular/core'

@Component({
    selector: 'cert-pop', 
    templateUrl: './cert-pop.component.html', 
    styleUrls: ['./cert-pop.component.scss']
})


export class CerPopUp {
    @Input() isOpen = false;
}