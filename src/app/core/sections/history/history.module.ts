import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService } from '../../services/storage.service';
import { JokesService } from '../../services/jokes.service';

import { HistoryComponent } from './history.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HistoryComponent
    ],
    exports: [
        HistoryComponent
    ],
    providers: [
        JokesService,
        StorageService
    ]
})
export class HistoryModule { }
