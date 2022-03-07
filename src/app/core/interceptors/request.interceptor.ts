import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let requestClone = request.clone({
            url: environment.jokesApi + request.url
        });

        return next.handle(requestClone);
    }

    shouldBeIntercepted(event: HttpResponse<any>): boolean {
        return event.body?.data;
    }
}
