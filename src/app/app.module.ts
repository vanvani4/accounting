import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NewsEditorComponent } from './admin/news-editor/news-editor.component';
import { NewsEditorDialogComponent } from './admin/news-editor-dialog/news-editor-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MessagesComponent,
    LoginComponent,
    AdminComponent,
    NewsEditorComponent,
    NewsEditorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewsEditorComponent
  ],
})
export class AppModule { }
