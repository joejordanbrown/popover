import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

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
    if (v) {
      this.overlayContainer.getContainerElement().classList.remove(this._themeClass);
      this.overlayContainer.getContainerElement().classList.add(v);
      this._themeClass = v;
    }
  }


  constructor(private overlayContainer: OverlayContainer) {
    this.overlayContainer.getContainerElement().classList.add(this.themeClass);
  }

}
