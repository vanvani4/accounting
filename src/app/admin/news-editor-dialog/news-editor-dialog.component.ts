import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-news-editor-dialog',
  templateUrl: './news-editor-dialog.component.html',
  styleUrls: ['./news-editor-dialog.component.css']
})
export class NewsEditorDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewsEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
