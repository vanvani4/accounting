import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { Menu } from '../models/menu';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';



@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  menu: Menu[] = [
    { id: 1, name: 'Головна', link: 'main' },
    { id: 2, name: 'Новини', link: 'news' },
    { id: 3, name: 'Про нас', link: '#' },
    { id: 4, name: 'Мій кабінет', link: 'admin' },
  ];

  companyTitle: string = 'Ми керуюча компанія';
  companyDescription: string = 'Компанія «Мій дім» заснована 2 вересня 2016 року з метою створення прикладу якісного професійного обслуговування багатоквартирного будинку на максимально прозорою і оптимізованої основі.'

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getMenu() {
    return this.menu;
  }

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
