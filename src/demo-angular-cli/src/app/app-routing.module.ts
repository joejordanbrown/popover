import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      meta: {
        title: 'Home',
        description: 'Description of the home page',
        themeColor: '#FFFFFF'
      }
    }
  },
  {
    path: 'examples',
    loadChildren: './pages/examples/examples.module#ExamplesModule'
  },
  {
    path: '**',
    component: PageErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
