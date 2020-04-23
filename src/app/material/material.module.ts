import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class MaterialModule {}
