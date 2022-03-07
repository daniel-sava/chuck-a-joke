import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { QuotesService } from "../../services/quotes.service";
import { StorageService } from "../../services/storage.service";
import { QuoteComponent } from "./quote.component";

describe('QuoteComponent', () => {
    let component: QuoteComponent;
    let fixture: ComponentFixture<QuoteComponent>;
    let quotesService: QuotesService

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [QuoteComponent],
            providers: [StorageService, QuotesService, HttpClient, HttpHandler]
        }).compileComponents();

        quotesService = TestBed.inject(QuotesService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(QuoteComponent);
        component = fixture.componentInstance;
    });

    it('Quote exists', () => {
        const randomQuote = quotesService.getRandomQuote();
        expect(randomQuote.quoteValue).toBeDefined();
        expect(randomQuote.quoteValue).not.toBe('');
    });
});