import { OnInit, Component, ViewChild, Query } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Joke } from 'src/app/core/models/joke.model';
import { HistoryComponent } from 'src/app/core/sections/history/history.component';

@Component({
    selector: 'app-category-page',
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
    @ViewChild(HistoryComponent) history!: HistoryComponent;

    layout: string = '1';

    category: string = '';
    jokes: Joke[] = [];

    constructor(private readonly route: ActivatedRoute, private readonly titleService: Title) {
        this.route.params.subscribe(params => {
            this.category = params['name'];
        });

        this.route.queryParams.subscribe(params => {
            this.layout = params['layout'];
        })
    }

    ngOnInit() {
        this.titleService.setTitle(`ChuckAJoke - ${this.category.charAt(0).toUpperCase() + this.category.substring(1)} Jokes`);
    }

    addJokeToHistory(joke: Joke) {
        this.history.addJokesToHistory([joke]);
    }
}
