import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk';
import { OverlayModule, MdCommonModule, MdRippleModule } from '@angular/material';

import { MdePopover } from './popover';
import { MdePopoverTrigger } from './popover-trigger';
import { MdePopoverTarget } from './popover-target';

@NgModule({
  imports: [
    OverlayModule,
    CommonModule,
    MdRippleModule,
    MdCommonModule,
    A11yModule
  ],
  exports: [MdePopover, MdePopoverTrigger, MdePopoverTarget, MdCommonModule],
  declarations: [MdePopover, MdePopoverTrigger, MdePopoverTarget],
})
export class MdePopoverModule {}

export { MdePopover } from './popover';
export { MdePopoverTrigger } from './popover-trigger';
export { MdePopoverTarget } from './popover-target';
export { MdePopoverPanel, MdeTarget } from './popover-interfaces';
// export { MdePopoverPositionX, MdePopoverPositionY, MdePopoverTriggerEvent } from './popover-types';
export { transformPopover } from './popover-animations';

