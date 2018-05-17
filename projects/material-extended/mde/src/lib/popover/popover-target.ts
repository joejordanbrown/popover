import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: 'mde-popover-target, [mdePopoverTarget]',
  exportAs: 'mdePopoverTarget'
})
export class MdePopoverTarget { // tslint:disable-line:directive-class-suffix

  constructor(public _elementRef: ElementRef) { }

}
