import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesService } from '../../services/jokes.service';
import { JokesComponent } from './jokes.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        JokesComponent
    ],
    exports: [
        JokesComponent
    ],
    providers: [
        JokesService
    ]
})
export class JokesModule { }
