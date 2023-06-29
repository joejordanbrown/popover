import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

import { MdePopoverModule } from '@material-extended/mde';

import { ExamplesRoutingModule } from './examples-routing.module';

import { ErrorModule } from '../error/error.module';

import { PageExamplesComponent } from './examples.component';
import { PageExamplesFormComponent } from './form/form.component';
import { PageExamplesBuilderComponent } from './builder/builder.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';


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
