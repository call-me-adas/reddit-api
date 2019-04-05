import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {environment} from "@env/environment";

const routes = {
  getNews: (c: ListContext) => `${environment.serverUrl}/r/${c.category}/new.json`
};

export interface ListContext {
  category: string;
}

@Injectable({ providedIn: 'root' })
export class ListService {
  constructor(private httpClient: HttpClient) {}

  getNews(context: ListContext): Observable<string> {
    return this.httpClient.cache()
      .get(routes.getNews(context))
      .pipe( map((body: any) => body),
        catchError(() => of('Error, could not load news'))
      );
  }
}
