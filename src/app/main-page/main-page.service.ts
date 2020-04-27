import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { News } from '../models/news';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>('http://localhost:3000/');
  }
}
