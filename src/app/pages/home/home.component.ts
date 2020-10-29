import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MdePopoverTrigger } from '@material-extended/mde';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  @ViewChild('repositionTrigger') trigger: MdePopoverTrigger;

  offsetX = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.offsetX += 100;
    setTimeout(() => {
      this.trigger.repositionPopover();
    });
  }

  onReset() {
    this.offsetX = 0;
    setTimeout(() => {
      this.trigger.repositionPopover();
    });
  }

}
