import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent, FooterComponent } from './components';
import { KeepHtmlPipe } from './pipes';
import { NumberOnlyDirective } from './directives';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NumberOnlyDirective,
        KeepHtmlPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HeaderComponent,
        FooterComponent,
        NumberOnlyDirective,
        KeepHtmlPipe,
    ]
})
export class SharedModule { }
