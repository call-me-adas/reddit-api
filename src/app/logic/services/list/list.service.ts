import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {environment} from '@env/environment';

interface ListContext {
  category: string;
  query?: string;
  after?: string;
}

const routes = {
  getNews: (c) => `${environment.serverUrl}xxx/r/${c.category}/new.json`,
  addNews: (c) => `${environment.serverUrl}/r/${c.category}/new.json?after=${c.after}`,
  addNewsQuery: (c) => `${environment.serverUrl}/r/${c.category}/search.json?after=${c.after}&q=${c.query}&sort=new`,
  getNewsByQuery: (c) => `${environment.serverUrl}/r/${c.category}/search.json?q=${c.query}&sort=new`
};

@Injectable({ providedIn: 'root' })
export class ListService {
  constructor(private httpClient: HttpClient) {}

  getNews(context: ListContext): Observable<{data}> {
    return this.httpClient
      .get(routes.getNews(context))
      .pipe( map((body: {data}) => body.data),
        catchError(() => of('Error, could not load news'))
      );
  }

  addNews(context: ListContext): Observable<{data}> {
    const MainContext = context.query === '' ? routes.addNews(context) : routes.addNewsQuery(context);
    return this.httpClient
      .get(MainContext)
      .pipe( map((body: {data}) => body.data),
        catchError(() => of('Error, could not load news'))
      );
  }

  getNewsByQuery(context: ListContext): Observable<{data}> {
    return this.httpClient
      .get(routes.getNewsByQuery(context))
      .pipe( map((body: {data}) => body.data),
        catchError(() => of('Error, could not load news'))
      );
  }
}
