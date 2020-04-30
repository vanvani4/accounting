import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MainPageService } from '../main-page/main-page.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  panelOpenState = false;

  constructor(
    public mainPageService: MainPageService,
    private _ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
