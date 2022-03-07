import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService } from '../../services/storage.service';
import { JokesService } from '../../services/jokes.service';

import { CategoriesComponent } from './categories.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        CategoriesComponent
    ],
    exports: [
        CategoriesComponent
    ],
    providers: [
        JokesService,
        StorageService
    ]
})
export class CategoriesModule { }
