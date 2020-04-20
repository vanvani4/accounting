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

  menu: Menu[];
  news: News[];

  constructor(private mainPageService: MainPageService) { }

  ngOnInit(): void {
    this.getMenu();
    this.getNews();
  }

  getMenu(): void {
    this.menu = this.mainPageService.getMenu();
  }

  getNews(): void {
    this.news = this.mainPageService.getNews();
    console.log(this.news);
  }

}
