import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'mde-popover-target, [mdePopoverTarget]',
  exportAs: 'mdePopoverTarget'
})
export class MdePopoverTarget {

  constructor(public _elementRef: ElementRef) { }

}
