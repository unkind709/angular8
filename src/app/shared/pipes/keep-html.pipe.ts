import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keepHtml'
})
export class KeepHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content): any {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
