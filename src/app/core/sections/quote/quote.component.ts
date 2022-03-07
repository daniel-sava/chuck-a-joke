import { OnInit, Component, Input } from '@angular/core';

import { Quote } from '../../models/quote.model';

import { QuotesService } from '../../services/quotes.service';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
    quote: Quote | null = null;
    image: number = 1;

    constructor(private readonly quotesSerive: QuotesService) { }

    ngOnInit() {
        this.quote = this.quotesSerive.getRandomQuote();
        this.image = Math.floor(Math.random() * 3) + 1;
    }
}
