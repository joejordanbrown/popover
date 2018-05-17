import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  hovering: any = null;

  @HostBinding('class.mat-elevation-z4') elevation = true;

  items: any = [
    {
      className: 'pink-grey-theme',
      styles: {
        'background-color': '#e91e63',
        'background': '-webkit-linear-gradient(-45deg, #e91e63 0%, #e91e63 50%, #bdbdbd 51%, #bdbdbd 100%)'
      }
    },
    {
      className: 'deeppurple-amber-theme',
      styles: {
        'background-color': '#673ab7',
        'background': '-webkit-linear-gradient(-45deg, #673ab7 0%, #673ab7 50%, #ffc107 51%, #ffc107 100%)'
      }
    },
    {
      className: 'indigo-grey-theme',
      styles: {
        'background-color': '#3f51b5',
        'background': '-webkit-linear-gradient(-45deg, #3f51b5 0%, #3f51b5 50%, #9e9e9e 51%, #9e9e9e 100%)'
      }
    }
  ];

  /*
{
  className: '',
  styles: {
    'background-color': '#f44336'
  }
},
{
  className: 'purple-green-theme',
  styles: {
    'background-color': '#2196f3'
  }
},
{
  className: 'candy-app-theme',
  styles: {
    'background-color': '#ff5722'
  }
}
*/


  themeValue = '';
  @Output() themeChange = new EventEmitter();

  @Input()
  get theme() {
    return this.themeValue;
  }

  set theme(val) {
    this.themeValue = val;
    this.themeChange.emit(this.themeValue);
  }


  constructor() {
  }

  ngOnInit() {
  }

  onItemKeydown(event, className = null) {
    const next = new ElementRef(event.nextSibling);

    if (event.keyCode === 9) {
      console.log('onItemKeydown', event);
      this.hovering = className;
    }
  }


}
