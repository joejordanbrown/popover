import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdToolbarModule } from '@angular/material';

import { MdePopoverModule } from '@material-extended/mde';

import { AppComponent }  from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    FlexLayoutModule,
    MdePopoverModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
