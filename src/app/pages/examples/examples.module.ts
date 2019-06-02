import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MdePopoverModule } from '@material-extended/mde';

import { ExamplesRoutingModule } from './examples-routing.module';

import { ErrorModule } from '../error/error.module';

import { PageExamplesComponent } from './examples.component';
import { PageExamplesFormComponent } from './form/form.component';
import { PageExamplesBuilderComponent } from './builder/builder.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MdePopoverModule,
    ExamplesRoutingModule,
    ErrorModule,
  ],
  declarations: [
    PageExamplesComponent,
    PageExamplesFormComponent,
    PageExamplesBuilderComponent
  ]
})
export class ExamplesModule { }
