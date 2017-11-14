import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageErrorComponent } from './error.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PageErrorComponent
  ],
  exports: [
    PageErrorComponent
  ]
})
export class ErrorModule { }
