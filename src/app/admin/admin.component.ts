import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page/main-page.service';
import { log } from 'util';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showFiller = false;

  constructor(public mainPageService: MainPageService) { }

  ngOnInit(): void {
    console.log(this.mainPageService.menu[0].name);
  }

}
