import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material';

import { ExamplesRoutingModule } from './examples-routing.module';

import { PageExamplesComponent } from './examples.component';
import { PageExamplesFormComponent } from './form/form.component';
import { ErrorModule } from '../error/error.module';
import { MdePopoverModule } from '@material-extended/mde';




@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MdePopoverModule,
    ExamplesRoutingModule,
    ErrorModule,
  ],
  declarations: [
    PageExamplesComponent,
    PageExamplesFormComponent,
  ]
})
export class ExamplesModule { }
