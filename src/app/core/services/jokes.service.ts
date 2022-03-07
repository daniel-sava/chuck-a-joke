import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Joke } from '../models/joke.model';
import { Category } from '../models/category.model';

@Injectable()
export class JokesService {
    constructor(private httpClient: HttpClient) { }

    public getRandomJoke(): Observable<Joke> {
        return this.httpClient.get<Joke>('/random').pipe(
            map(joke => { return new Joke().deserialize(joke); })
        );
    }

    public getRandomJokeInCategory(category: string): Observable<Joke> {
        return this.httpClient.get<Joke>(`/random?category=${category}`).pipe(
            map(joke => { return new Joke().deserialize(joke); })
        );
    }

    public getCategories(): Observable<Category[]> {
        return this.httpClient.get<string[]>('/categories').pipe(
            map(categories => { return categories.map(category => { return new Category(category) }); })
        );
    }
}
