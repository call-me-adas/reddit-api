import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '@env/environment';

interface ListContext {
  category: string;
  query?: string;
  after?: string;
}

const routes = {
  getNews: (c) => `${environment.serverUrl}/r/${c.category}/new.json`,
  addNews: (c) => `${environment.serverUrl}/r/${c.category}/new.json?after=${c.after}`,
  addNewsQuery: (c) => `${environment.serverUrl}/r/${c.category}/search.json?after=${c.after}&q=${c.query}&sort=new`,
  getNewsByQuery: (c) => `${environment.serverUrl}/r/${c.category}/search.json?q=${c.query}&sort=new`
};

@Injectable({ providedIn: 'root' })
export class ListService {
  constructor(private httpClient: HttpClient) {}

  getNews(context: ListContext): Observable<Object> {
    return this.httpClient.get(routes.getNews(context));
  }

  addNews(context: ListContext): Observable<Object> {
    const MainContext = context.query === '' ? routes.addNews(context) : routes.addNewsQuery(context);
    return this.httpClient.get(MainContext);
  }

  getNewsByQuery(context: ListContext): Observable<Object> {
    return this.httpClient.get(routes.getNewsByQuery(context));
  }
}
