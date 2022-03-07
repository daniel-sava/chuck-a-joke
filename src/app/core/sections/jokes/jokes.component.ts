import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';

import { Joke } from 'src/app/core/models/joke.model';
import { JokesService } from 'src/app/core/services/jokes.service';

const JOKES_ON_PAGE: number = 5;

@Component({
    selector: 'app-jokes',
    templateUrl: './jokes.component.html',
    styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
    @Output() addJokeToHistory = new EventEmitter<Joke>();
    @Input() layout: string = '1';
    @Input() category: string = '';

    jokes: Joke[] = [];

    constructor(private readonly jokesService: JokesService) { }

    ngOnInit() {
        this.getJokes();
    }

    getJokes() {
        this.jokes = [];

        for (let index = 0; index < JOKES_ON_PAGE; index++) {
            this.jokesService.getRandomJokeInCategory(this.category).subscribe({
                next: (joke) => {
                    if (this.jokes.length < JOKES_ON_PAGE) {
                        joke.setCategory(this.category);
                        this.jokes.push(joke);

                        this.addJokeToHistory.emit(joke);
                    }
                }
            });
        }
    }
}
