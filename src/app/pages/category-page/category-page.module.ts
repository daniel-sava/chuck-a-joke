import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryPageComponent } from './category-page.component';
import { QuoteModule } from 'src/app/core/sections/quote/quote.module';
import { CategoryPageRoutingModule } from './category-page-routing.module';
import { StorageService } from 'src/app/core/services/storage.service';
import { HistoryModule } from 'src/app/core/sections/history/history.module';
import { JokesModule } from 'src/app/core/sections/jokes/jokes.module';

@NgModule({
    imports: [
        CommonModule,
        CategoryPageRoutingModule,
        QuoteModule,
        HistoryModule,
        JokesModule
    ],
    declarations: [
        CategoryPageComponent
    ],
    exports: [
        CategoryPageComponent
    ],
    providers: [
        StorageService
    ]
})
export class CategoryPageModule { }
