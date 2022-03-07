import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService } from '../../services/storage.service';
import { JokesService } from '../../services/jokes.service';

import { QuoteComponent } from './quote.component';
import { QuotesService } from '../../services/quotes.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        QuoteComponent
    ],
    exports: [
        QuoteComponent
    ],
    providers: [
        QuotesService
    ]
})
export class QuoteModule { }
