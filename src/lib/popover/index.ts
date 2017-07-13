import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk';
import { OverlayModule, MdCommonModule, MdRippleModule } from '@angular/material';

import { MdePopover } from './popover';
import { MdePopoverTrigger } from './popover-trigger';

@NgModule({
  imports: [
    OverlayModule,
    CommonModule,
    MdRippleModule,
    MdCommonModule,
    A11yModule
  ],
  exports: [MdePopover, MdePopoverTrigger, MdCommonModule],
  declarations: [MdePopover, MdePopoverTrigger],
})
export class MdePopoverModule {}

export { MdePopover } from './popover';
export { MdePopoverTrigger } from './popover-trigger';
export { MdePopoverPanel, MdeTarget } from './popover-interfaces';
export { MdePopoverPositionX, MdePopoverPositionY, MdePopoverTriggerEvent } from './popover-types';
export { transformPopover } from './popover-animations';
