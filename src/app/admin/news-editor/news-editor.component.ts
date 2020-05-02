import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainPageService } from '../../main-page/main-page.service';
import { News } from './../../models/news';
import { NewsEditorDialogComponent } from '../news-editor-dialog/news-editor-dialog.component';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {

  news: News[];
  currentNews: News;

  constructor(
    public mainPageService: MainPageService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.mainPageService.getNews()
      .subscribe(news => (this.news = news));
  }

  change(news: News) {
    const dialogRef = this.dialog.open(NewsEditorDialogComponent, {
      width: 'auto',
      data: {
        id: news.id,
        title: news.title,
        description: news.description,
        link: news.link,
        image: news.image
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
