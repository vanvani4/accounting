import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../../main-page/main-page.service';
import { News } from './../../models/news';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {

  news: News[];

  constructor(public mainPageService: MainPageService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.mainPageService.getNews()
      .subscribe(news => (this.news = news));
  }

  change() {
    
  }
}
