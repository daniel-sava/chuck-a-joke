import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page.component';
import { HeroModule } from 'src/app/core/sections/hero/hero.module';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CategoriesModule } from 'src/app/core/sections/categories/categories.module';
import { QuoteModule } from 'src/app/core/sections/quote/quote.module';

@NgModule({
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        HeroModule,
        CategoriesModule,
        QuoteModule
    ],
    declarations: [
        LandingPageComponent
    ],
    exports: [
        LandingPageComponent
    ]
})
export class LandingPageModule { }
