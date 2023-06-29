import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';


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


