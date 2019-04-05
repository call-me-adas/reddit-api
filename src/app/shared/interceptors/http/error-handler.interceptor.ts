import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '@env/environment';
import {catchError} from 'rxjs/internal/operators';
import {Store} from '@ngrx/store';
/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private store: Store<{}>) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
    }

    // Customize the default error handler here if needed
    private errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>> {
        if (!environment.production) {
            console.error('Request error', response);
        }
        throw response;
    }
}
