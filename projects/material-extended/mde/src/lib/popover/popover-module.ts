import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';

import { MdePopover } from './popover';
import { MdePopoverTrigger } from './popover-trigger';
import { MdePopoverTarget } from './popover-target';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [
    OverlayModule,
    CommonModule,
    A11yModule
  ],
  exports: [MdePopover, MdePopoverTrigger, MdePopoverTarget],
  declarations: [MdePopover, MdePopoverTrigger, MdePopoverTarget],
})
export class MdePopoverModule {}
