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
  
  news: News[];
  menu: Menu[];

  constructor(private mainPageService: MainPageService) { }

  ngOnInit(): void {
    this.getNews();
    this.getMenu();
  }

  getNews(): void {
    this.mainPageService.getNews()
      .subscribe(news => (this.news = news));
  }

  getMenu(): void {
    this.menu = this.mainPageService.getMenu();
  }
}
