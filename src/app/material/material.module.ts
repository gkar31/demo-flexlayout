import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatTableModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSortModule
} from '@angular/material';

const Material = [
  MatButtonModule,
  MatTableModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatCardModule,
  FlexLayoutModule,
  MatSortModule
];


@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
