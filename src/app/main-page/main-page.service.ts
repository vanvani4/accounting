import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';



@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>('http://localhost:3000/')
      .pipe(
        // tap(_ => this.log('fetched news')),
        catchError(this.handleError<News[]>('getNews', []))
      );
  };


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
