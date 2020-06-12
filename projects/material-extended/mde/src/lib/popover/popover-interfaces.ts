import { ElementRef, EventEmitter, NgZone, TemplateRef } from '@angular/core';
import { MdePopoverPositionX, MdePopoverPositionY, MdePopoverTriggerEvent, MdePopoverScrollStrategy } from './popover-types';

export interface MdePopoverPanel {
    positionX: MdePopoverPositionX;
    positionY: MdePopoverPositionY;
    containerPositioning: boolean;
    overlapTrigger: boolean;
    triggerEvent: MdePopoverTriggerEvent;
    scrollStrategy: MdePopoverScrollStrategy;
    enterDelay: number;
    leaveDelay: number;
    targetOffsetX: number;
    targetOffsetY: number;
    arrowOffsetX: number;
    arrowWidth: number;
    arrowColor: string;
    closeOnClick: boolean;
    closeDisabled: boolean;
    setCurrentStyles: () => void;
    templateRef: TemplateRef<any>;
    close: EventEmitter<void>;
    zone: NgZone;
    setPositionClasses: (x: MdePopoverPositionX, y: MdePopoverPositionY) => void;
    _emitCloseEvent: () => void;
}

export interface MdePopoverConfig {
    positionX: MdePopoverPositionX;
    positionY: MdePopoverPositionY;
    overlapTrigger: boolean;
    triggerEvent: MdePopoverTriggerEvent;
    triggerDelay: number;
    targetOffsetX: number;
    targetOffsetY: number;
    arrowOffsetX: number;
    arrowWidth: number;
    arrowColor: string;
    closeOnClick: boolean;
}

export interface MdeTarget {
    _elementRef: ElementRef;
}
