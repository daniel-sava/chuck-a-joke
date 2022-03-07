import { OnInit, Component } from '@angular/core';

import { Joke } from 'src/app/core/models/joke.model';

import { JokesService } from 'src/app/core/services/jokes.service';
import { Category } from '../../models/category.model';
import { StorageService } from '../../services/storage.service';

const CATEGORIES_DISPLAYED = 3;

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    public readonly CATEGORIES_DISPLAYED = CATEGORIES_DISPLAYED;

    categories: Category[] = [];
    categoriesDisplayed: Category[] = [];

    constructor(private readonly jokesService: JokesService, private readonly storageService: StorageService) { }

    ngOnInit() {
        this.jokesService.getCategories().subscribe({
            next: (categories) => {
                this.categories = categories;

                const existingCategories = this.storageService.getCategories();
                if (existingCategories) {
                    this.categoriesDisplayed = existingCategories;
                } else {
                    this.establishDisplayedCategories();
                }
            }
        });
    }

    refreshCategories() {
        this.establishDisplayedCategories();
    }

    establishDisplayedCategories() {
        this.categoriesDisplayed = [];

        for (let index = 0; index < this.CATEGORIES_DISPLAYED; index++) {
            let randomCategory = this.getRandomCategory();
            while (this.categoriesDisplayed.indexOf(randomCategory) !== -1) {
                randomCategory = this.getRandomCategory();
            }

            this.categoriesDisplayed.push(randomCategory);
        }

        this.storageService.saveCategories(this.categoriesDisplayed);
    }

    getRandomCategory(): Category {
        return this.categories[Math.floor(Math.random() * this.categories.length)];
    }
}
