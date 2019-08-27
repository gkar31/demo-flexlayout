import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const Material = [
  MatButtonModule,
  MatTableModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatCardModule,
  FlexLayoutModule,
  MatSortModule,
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule
];


@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule {}
