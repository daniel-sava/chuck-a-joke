import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService } from '../../services/storage.service';
import { JokesService } from '../../services/jokes.service';

import { HeroComponent } from './hero.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeroComponent
    ],
    exports: [
        HeroComponent
    ],
    providers: [
        JokesService,
        StorageService
    ]
})
export class HeroModule { }
