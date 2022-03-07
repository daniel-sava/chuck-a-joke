import { Injectable } from '@angular/core';

import { Quote } from '../models/quote.model';

const QUOTES = [
    "One of my life's principles is to develop myself to the maximum of my potential in all ways and to help others do the same.",
    "And no one is more in our heads than a food industry that spends billions of dollars in marketing its message in every means possible.",
    "If the government decides to become a tyrannical government, our guns are to protect us against that.",
];

@Injectable()
export class QuotesService {
    private readonly quotes: string[] = QUOTES;

    constructor() { }

    public getRandomQuote(): Quote {
        return new Quote(this.quotes[Math.floor(Math.random() * this.quotes.length)]);
    }
}
