import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  imports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    TextFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    TextFieldModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },],
})
export class MaterialModule {}