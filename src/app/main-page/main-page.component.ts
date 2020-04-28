import { Component, OnInit } from '@angular/core';
import { MainPageService } from './main-page.service';
import { Menu } from '../models/menu';
import { News } from '../models/news';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  menu: Menu[] = [
    { id: 1, name: 'Головна', link: '/main' },
    { id: 2, name: 'Новини', link: 'news' },
    { id: 3, name: 'Про нас', link: '#' },
    { id: 4, name: 'Мій кабінет', link: 'login' },
  ];
  
  news: News[];

  constructor(private mainPageService: MainPageService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.mainPageService.getNews()
      .subscribe(news => (this.news = news));
  }
}
