import { Component, OnInit } from '@angular/core';
import { MdePopoverTrigger } from '@material-extended/mde';

// import 'rxjs/add/operator/first';

import { first } from 'rxjs/operators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class PageExamplesFormComponent implements OnInit {

  popoverText: string;
  previousRef: MdePopoverTrigger;
  popoverOpen = false;
  popoverSwitching = false;

  closeTimeout: any;

  constructor() { }

  ngOnInit() {
  }

  openPopover(ref: MdePopoverTrigger, text: string) {
    console.log('this.previousRef', this.previousRef);
    console.log('ref', ref);
    // if (this.previousRef !== ref) {
    // this.popoverText = text;
    // ref.openPopover();
    // }

    if (this.previousRef !== ref) {
      console.log('this.previousRef !== ref');
      ref.openPopover();
      this.popoverSwitching = false;
    } else {
      console.log('this.previousRef === ref');
      this.popoverSwitching = true;
      clearTimeout(this.closeTimeout);
    }

    this.popoverText = text;
    this.previousRef = ref;
    this.popoverOpen = true;
  }

  closePopover(ref: MdePopoverTrigger) {
    this.closeTimeout = setTimeout(() => {
      // if (!this.popoverSwitching) {
        ref.closePopover();
        this.popoverOpen = false;
        this.previousRef = null;
      // }
    }, 400);
  }










  openPopoverOld(ref: MdePopoverTrigger, text: string) {
    console.log('this.previousRef', this.previousRef);
    console.log('ref', ref);
    // if (this.previousRef !== ref) {
    // this.popoverText = text;
    // ref.openPopover();
    // }
    if (this.popoverOpen) {
      console.log('switching');
      this.popoverSwitching = true;
      // setTimeout(() => {
      clearTimeout(this.closeTimeout);
      // }, 200);
    } else {
      ref.openPopover();
      this.popoverSwitching = false;
    }
    ref.closed.pipe(first()).subscribe(() => {
      console.log('event', event);
    });
    this.popoverText = text;
    this.previousRef = ref;
    this.popoverOpen = true;
  }

  closePopoverOld(ref) {
    this.closeTimeout = setTimeout(() => {
      if (!this.popoverSwitching) {
        ref.closePopover();
        this.popoverOpen = false;
        console.log('Close, this.popoverSwitching', this.popoverSwitching);
      } else {
        console.log('Don\'t close, this.popoverSwitching', this.popoverSwitching);
      }
    }, 600);
  }

}
