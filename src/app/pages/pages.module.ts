import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { MdePopoverModule } from '@material-extended/mde';

import { ExamplesModule } from './examples/examples.module';
import { ErrorModule } from './error/error.module';

import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MdePopoverModule,
    ErrorModule,
    ExamplesModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    ExamplesModule,
    HomeComponent
  ]
})
export class PagesModule { }


