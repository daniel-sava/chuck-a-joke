import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Joke } from '../models/joke.model';

@Injectable()
export class StorageService {
    constructor() { }

    public saveJokeOfTheDay(joke: Joke): void {
        let expiresAt = new Date();
        expiresAt.setHours(24, 0, 0, 0);

        joke.setExpirationDate(expiresAt);
        localStorage.setItem('jokeOfTheDay', joke.toString());
    }

    public getJokeOfTheDay(): Joke | null {
        const joke = localStorage.getItem('jokeOfTheDay');
        if (!joke) {
            return null;
        }

        const parsedJoke = JSON.parse(joke);
        const expirationDate = new Date(parsedJoke.expiration);

        if (expirationDate.getTime() - Date.now() <= 0) {
            return null;
        }

        return new Joke().deserialize(JSON.parse(joke));
    }

    public saveCategories(categories: Category[]) {
        sessionStorage.setItem('categories', JSON.stringify(
            categories.map(category => { return category.categoryName; })
        ));
    }

    public getCategories(): Category[] | null {
        const categories = sessionStorage.getItem('categories');
        if (!categories) {
            return null;
        }

        const parsedCategories = JSON.parse(categories) as string[];
        return parsedCategories.map((category) => { return new Category(category) });
    }

    addJokeToHistory(category: string, joke: Joke) {
        let jokes: Joke[] = [];
        const existingJokes = localStorage.getItem(category);
        if (existingJokes) {
            let parsedJokes = JSON.parse(existingJokes) as string[];
            jokes = parsedJokes.map(joke => { return new Joke().deserialize(JSON.parse(joke)); });
        }

        jokes.push(joke);

        localStorage.setItem(category, JSON.stringify(jokes.map(joke => { return joke.toString(); })));
    }

    getJokesHistory(category: string): Joke[] | null {
        const jokes = localStorage.getItem(category);
        if (!jokes) {
            return null;
        }

        const parsedJokes = JSON.parse(jokes) as string[];
        return parsedJokes.map(joke => { return new Joke().deserialize(JSON.parse(joke)); })
    }

    deleteJokesHistory(category: string) {
        localStorage.removeItem(category);
    }
}
