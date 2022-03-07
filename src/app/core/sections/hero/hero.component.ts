import { OnInit, Component } from '@angular/core';

import { Joke } from 'src/app/core/models/joke.model';

import { JokesService } from 'src/app/core/services/jokes.service';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    joke: Joke | null = null;

    constructor(private readonly jokesService: JokesService, private readonly storageService: StorageService) { }

    ngOnInit() {
        this.joke = this.storageService.getJokeOfTheDay();

        if (!this.joke) {
            this.jokesService.getRandomJoke().subscribe({
                next: (joke) => {
                    this.joke = joke;
                    this.storageService.saveJokeOfTheDay(joke);
                }
            });
        }
    }
}
