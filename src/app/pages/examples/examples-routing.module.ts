import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PageExamplesComponent } from './examples.component';
import { PageExamplesFormComponent } from './form/form.component';
import { PageErrorComponent } from '../error/error.component';


const routes: Routes = [
  {
    path: '',
    component: PageExamplesComponent,
    data: {
      meta: {
        title: 'Examples',
        description: '',
        themeColor: '#FFFFFF'
      }
    },
    children: [
      {
        path: '',
        component: PageExamplesComponent,
      },
      {
        path: 'form',
        component: PageExamplesFormComponent,
      },
      {
        path: '**',
        component: PageErrorComponent
      },
    ]
  },
  {
    path: '**',
    component: PageErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
