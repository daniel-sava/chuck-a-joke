import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Title } from "@angular/platform-browser";

import { LandingPageComponent } from "./landing-page.component";

describe('LandingPageComponent', () => {
    let component: LandingPageComponent;
    let fixture: ComponentFixture<LandingPageComponent>;
    let titleService: Title;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [LandingPageComponent],
            providers: [Title]
        }).compileComponents();

        titleService = TestBed.inject(Title);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LandingPageComponent);
        component = fixture.componentInstance;
    });

    it('Title is ChuckAJoke - Chuck Norris Jokes', () => {
        expect(titleService.getTitle()).toBe('ChuckAJoke - Chuck Norris Jokes');
    });
});