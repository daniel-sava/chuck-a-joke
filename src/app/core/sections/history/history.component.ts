import { OnInit, Component, Input } from '@angular/core';

import { Joke } from 'src/app/core/models/joke.model';

import { JokesService } from 'src/app/core/services/jokes.service';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    @Input() category: string = '';

    history: Joke[] = [];

    constructor(private readonly jokesService: JokesService, private readonly storageService: StorageService) { }

    ngOnInit() {
        this.getJokesHistory();
    }

    ngOnChanges() {
        this.getJokesHistory();
    }

    getJokesHistory() {
        const jokesHistory = this.storageService.getJokesHistory(this.category);
        if (jokesHistory) {
            this.history = jokesHistory;
        }
    }

    addJokesToHistory(jokes: Joke[]) {
        for (let joke of jokes) {
            this.storageService.addJokeToHistory(this.category, joke);
        }

        this.getJokesHistory();
    }

    clearHistory() {
        this.storageService.deleteJokesHistory(this.category);
        this.history = [];
    }
}
