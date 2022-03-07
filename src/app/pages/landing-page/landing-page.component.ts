import { OnInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
    constructor(private readonly titleService: Title) {
        this.titleService.setTitle('ChuckAJoke - Chuck Norris Jokes');
    }

    ngOnInit() { }
}
