import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    // TODO: find out how to sanitize the URL before going to production
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 