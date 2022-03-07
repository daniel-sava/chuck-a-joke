import { NgModule, Optional, SkipSelf } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './interceptors/request.interceptor';

import { JokesService } from './services/jokes.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        JokesService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
        if (parentModule) {
            throw new Error(
                `${moduleName} has already been loaded. Import Core modules in the AppModule only.`
            );
        }
    }
}
