import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MdePopoverModule } from '@material-extended/mde';

import { AppRoutingModule } from './app-routing.module';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { ThemePickerComponent } from './shared/components/theme-picker/theme-picker.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { GithubComponent } from './shared/components/github/github.component';
import { SupportComponent } from './shared/components/support/support.component';
import { ErrorModule } from './pages/error/error.module';


@NgModule({
  declarations: [
    AppComponent,
    ThemePickerComponent,
    NotificationsComponent,
    GithubComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MdePopoverModule,
    AppRoutingModule,
    PagesModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
