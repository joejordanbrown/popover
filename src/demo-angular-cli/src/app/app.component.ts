import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/material';


export const DEFAULT_THEME = 'deeppurple-amber-theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') _themeClass: string = DEFAULT_THEME;

  get themeClass() {
    return this._themeClass;
  }
  set themeClass(v) {
    this._themeClass = v;
    if (this._themeClass) {
      this.overlayContainer.themeClass = v;
    }
  }


  constructor(private overlayContainer: OverlayContainer) {
    this.overlayContainer.themeClass = this.themeClass;
  }

}
