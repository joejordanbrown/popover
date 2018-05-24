import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Optional,
  Output,
  ViewContainerRef,
  HostListener,
  HostBinding,
} from '@angular/core';


import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ConnectedPositionStrategy,
  Overlay,
  OverlayRef,
  OverlayConfig,
  HorizontalConnectionPos,
  VerticalConnectionPos,
  FlexibleConnectedPositionStrategy
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

import { Subscription } from 'rxjs';

import { first } from 'rxjs/operators';

import { MdePopoverPanel, MdeTarget } from './popover-interfaces';
import { MdePopoverPositionX, MdePopoverPositionY, MdePopoverTriggerEvent } from './popover-types';
import { throwMdePopoverMissingError } from './popover-errors';



/**
 * This directive is intended to be used in conjunction with an mde-popover tag. It is
 * responsible for toggling the display of the provided popover instance.
 */

@Directive({
  selector: '[mdePopoverTriggerFor]',
  exportAs: 'mdePopoverTrigger'
})
export class MdePopoverTrigger implements AfterViewInit, OnDestroy { // tslint:disable-line:directive-class-suffix

    @HostBinding('attr.aria-haspopup') ariaHaspopup = true;

    private _portal: TemplatePortal<any>;
    private _overlayRef: OverlayRef | null = null;
    private _popoverOpen = false;
    private _halt = false;
    private _backdropSubscription: Subscription;
    private _positionSubscription: Subscription;

    private _mouseoverTimer: any;

    // tracking input type is necessary so it's possible to only auto-focus
    // the first item of the list when the popover is opened via the keyboard
    private _openedByMouse = false;

    /** References the popover instance that the trigger is associated with. */
    @Input('mdePopoverTriggerFor') popover: MdePopoverPanel;

    /** References the popover target instance that the trigger is associated with. */
    @Input('mdePopoverTargetAt') targetElement: MdeTarget;

    /** Position of the popover in the X axis */
    @Input('mdePopoverPositionX') positionX: MdePopoverPositionX;

    /** Position of the popover in the Y axis */
    @Input('mdePopoverPositionY') positionY: MdePopoverPositionY;

    /** Popover trigger event */
    @Input('mdePopoverTriggerOn') triggerEvent: MdePopoverTriggerEvent;

    /** Popover delay */
    @Input('mdePopoverEnterDelay') enterDelay: number;

    /** Popover delay */
    @Input('mdePopoverLeaveDelay') leaveDelay: number;

    /** Popover overlap trigger */
    @Input('mdePopoverOverlapTrigger') overlapTrigger: boolean;

    /** Popover target offset x */
    @Input('mdePopoverOffsetX') targetOffsetX: number;

    /** Popover target offset y */
    @Input('mdePopoverOffsetY') targetOffsetY: number;

    /** Popover arrow offset x */
    @Input('mdePopoverArrowOffsetX') arrowOffsetX: number;


    /** Popover arrow width */
    @Input('mdePopoverArrowWidth') arrowWidth: number;


    /** Popover arrow color */
    @Input('mdePopoverArrowColor') arrowColor: string;


    /** Popover container close on click */
    @Input('mdePopoverCloseOnClick') closeOnClick: boolean;


    /** Event emitted when the associated popover is opened. */
    @Output() opened = new EventEmitter<void>();

    /** Event emitted when the associated popover is closed. */
    @Output() closed = new EventEmitter<void>();


    constructor(private _overlay: Overlay, public _elementRef: ElementRef,
              private _viewContainerRef: ViewContainerRef,
              @Optional() private _dir: Directionality) { }

    ngAfterViewInit() {
        this._checkPopover();
        this._setCurrentConfig();
        this.popover.close.subscribe(() => this.closePopover());
    }

    ngOnDestroy() { this.destroyPopover(); }


    private _setCurrentConfig() {

        if (this.positionX === 'before' || this.positionX === 'after') {
          this.popover.positionX = this.positionX;
        }

        if (this.positionY === 'above' || this.positionY === 'below') {
          this.popover.positionY = this.positionY;
        }

        if (this.triggerEvent) {
            this.popover.triggerEvent = this.triggerEvent;
        }

        if (this.enterDelay) {
          this.popover.enterDelay = this.enterDelay;
        }

        if (this.leaveDelay) {
          this.popover.leaveDelay = this.leaveDelay;
        }

        if (this.overlapTrigger === true || this.overlapTrigger === false) {
            this.popover.overlapTrigger = this.overlapTrigger;
        }

        if (this.targetOffsetX) {
            this.popover.targetOffsetX = this.targetOffsetX;
        }

        if (this.targetOffsetY) {
            this.popover.targetOffsetY = this.targetOffsetY;
        }

        if (this.arrowOffsetX) {
            this.popover.arrowOffsetX = this.arrowOffsetX;
        }

        if (this.arrowWidth) {
            this.popover.arrowWidth = this.arrowWidth;
        }

        if (this.arrowColor) {
            this.popover.arrowColor = this.arrowColor;
        }

        if (this.closeOnClick === true || this.closeOnClick === false) {
            this.popover.closeOnClick = this.closeOnClick;
        }

        this.popover.setCurrentStyles();
    }


    /** Whether the popover is open. */
    get popoverOpen(): boolean { return this._popoverOpen; }

    @HostListener('click') onClick() {
      if (this.popover.triggerEvent === 'click') {
          // this.popover.setCurrentStyles();
          // this._setCurrentConfig();
          this.togglePopover();
      }
    }

    @HostListener('mouseenter') onMouseEnter() {
      this._halt = false;
      if (this.popover.triggerEvent === 'hover') {
          this._mouseoverTimer = setTimeout(() => {
              this.openPopover();
          }, this.popover.enterDelay);
      }
    }

    @HostListener('mouseleave') onMouseLeave() {
      if (this.popover.triggerEvent === 'hover') {
        if (this._mouseoverTimer) {
            clearTimeout(this._mouseoverTimer);
            this._mouseoverTimer = null;
        }
        if (this._popoverOpen) {
            setTimeout(() => {
                if (!this.popover.closeDisabled) {
                    this.closePopover();
                }
            }, this.popover.leaveDelay);
        } else {
          this._halt = true;
        }
      }
    }

    /** Toggles the popover between the open and closed states. */
    togglePopover(): void {
        return this._popoverOpen ? this.closePopover() : this.openPopover();
    }

    /** Opens the popover. */
    openPopover(): void {
        if (!this._popoverOpen && !this._halt) {
            this._createOverlay().attach(this._portal);

            /** Only subscribe to backdrop if trigger event is click */
            if (this.triggerEvent === 'click') {
              this._subscribeToBackdrop();
            }

            this._initPopover();
        }
    }

    /** Closes the popover. */
    closePopover(): void {
        if (this._overlayRef) {
          this._overlayRef.detach();

          /** Only unsubscribe to backdrop if trigger event is click */
          if (this.triggerEvent === 'click') {
            this._backdropSubscription.unsubscribe();
          }

          this._resetPopover();
        }
    }

    /** Removes the popover from the DOM. */
    destroyPopover(): void {
        if (this._overlayRef) {
          this._overlayRef.dispose();
          this._overlayRef = null;
          this._cleanUpSubscriptions();
        }
    }

    /** Focuses the popover trigger. */
    focus() {
        this._elementRef.nativeElement.focus();
    }

    /** The text direction of the containing app. */
    get dir(): Direction {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }

    /**
    * This method ensures that the popover closes when the overlay backdrop is clicked.
    * We do not use first() here because doing so would not catch clicks from within
    * the popover, and it would fail to unsubscribe properly. Instead, we unsubscribe
    * explicitly when the popover is closed or destroyed.
    */
    private _subscribeToBackdrop(): void {
        if (this._overlayRef) {
          this._backdropSubscription = this._overlayRef.backdropClick().subscribe(() => {
            this.popover._emitCloseEvent();
          });
        }
    }

    /**
    * This method sets the popover state to open and focuses the first item if
    * the popover was opened via the keyboard.
    */
    private _initPopover(): void {
        this._setIsPopoverOpen(true);
    }

    /**
    * This method resets the popover when it's closed, most importantly restoring
    * focus to the popover trigger if the popover was opened via the keyboard.
    */
    private _resetPopover(): void {
        this._setIsPopoverOpen(false);

        // Focus only needs to be reset to the host element if the popover was opened
        // by the keyboard and manually shifted to the first popover item.
        if (!this._openedByMouse) {
          this.focus();
        }
        this._openedByMouse = false;
    }

    /** set state rather than toggle to support triggers sharing a popover */
    private _setIsPopoverOpen(isOpen: boolean): void {
        this._popoverOpen = isOpen;
        this._popoverOpen ? this.opened.emit() : this.closed.emit();
    }

    /**
    *  This method checks that a valid instance of MdPopover has been passed into
    *  mdPopoverTriggerFor. If not, an exception is thrown.
    */
    private _checkPopover() {
        if (!this.popover) {
          throwMdePopoverMissingError();
        }
    }

    /**
    *  This method creates the overlay from the provided popover's template and saves its
    *  OverlayRef so that it can be attached to the DOM when openPopover is called.
    */
    private _createOverlay(): OverlayRef {
        if (!this._overlayRef) {
          this._portal = new TemplatePortal(this.popover.templateRef, this._viewContainerRef);
          const config = this._getOverlayConfig();
          this._subscribeToPositions(config.positionStrategy as FlexibleConnectedPositionStrategy);
          this._overlayRef = this._overlay.create(config);
        }

        return this._overlayRef;
    }

    /**
    * This method builds the configuration object needed to create the overlay, the OverlayConfig.
    * @returns OverlayConfig
    */
    private _getOverlayConfig(): OverlayConfig {
        const overlayState = new OverlayConfig();
        overlayState.positionStrategy = this._getPosition();

        /** Display overlay backdrop if trigger event is click */
        if (this.triggerEvent === 'click') {
          overlayState.hasBackdrop = true;
          overlayState.backdropClass = 'cdk-overlay-transparent-backdrop';
        }

        overlayState.direction = this.dir;
        overlayState.scrollStrategy = this._overlay.scrollStrategies.reposition();
        return overlayState;
    }

    /**
    * Listens to changes in the position of the overlay and sets the correct classes
    * on the popover based on the new position. This ensures the animation origin is always
    * correct, even if a fallback position is used for the overlay.
    */
    private _subscribeToPositions(position: FlexibleConnectedPositionStrategy): void {
        this._positionSubscription = position.positionChanges.subscribe(change => {
            const posisionX: MdePopoverPositionX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
            let posisionY: MdePopoverPositionY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';

            if (!this.popover.overlapTrigger) {
                posisionY = posisionY === 'below' ? 'above' : 'below';
            }

            this.popover.positionX = posisionX;
            this.popover.positionY = posisionY;
            this.popover.setCurrentStyles();

            this.popover.setPositionClasses(posisionX, posisionY);
        });
    }

    /**
    * This method builds the position strategy for the overlay, so the popover is properly connected
    * to the trigger.
    * @returns ConnectedPositionStrategy
    */
    private _getPosition(): FlexibleConnectedPositionStrategy {
        const [originX, originFallbackX]: HorizontalConnectionPos[] =
          this.popover.positionX === 'before' ? ['end', 'start'] : ['start', 'end'];

        const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =
          this.popover.positionY === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];

        // let originY = overlayY;
        // let fallbackOriginY = overlayFallbackY;

        let originY = overlayY;
        let originFallbackY = overlayFallbackY;

        const overlayX = originX;
        const overlayFallbackX = originFallbackX;

        // let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        // let [overlayX, overlayFallbackX] = [originX, originFallbackX];

        /** Reverse overlayY and fallbackOverlayY when overlapTrigger is false */
        if (!this.popover.overlapTrigger) {
          originY = overlayY === 'top' ? 'bottom' : 'top';
          originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }

        let offsetX = 0;
        let offsetY = 0;

        if (this.popover.targetOffsetX && !isNaN(Number(this.popover.targetOffsetX))) {
          offsetX = Number(this.popover.targetOffsetX);
          // offsetX = -16;
        }

        if (this.popover.targetOffsetY && !isNaN(Number(this.popover.targetOffsetY))) {
          offsetY = Number(this.popover.targetOffsetY);
          // offsetY = -10;
        }

        /**
         * For overriding position element, when mdePopoverTargetAt has a valid element reference.
         * Useful for sticking popover to parent element and offsetting arrow to trigger element.
         * If undefined defaults to the trigger element reference.
         */
        let element = this._elementRef;
        if (typeof this.targetElement !== 'undefined') {
            this.popover.containerPositioning = true;
            element = this.targetElement._elementRef;
        }

        return this._overlay.position()
        .flexibleConnectedTo(element)
        .withPositions([
          {
              originX,
              originY,
              overlayX,
              overlayY,
              offsetY
          },
          {
              originX: originFallbackX,
              originY,
              overlayX: overlayFallbackX,
              overlayY,
              offsetY
          },
          {
            originX,
            originY: originFallbackY,
            overlayX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          },
          {
            originX: originFallbackX,
            originY: originFallbackY,
            overlayX: overlayFallbackX,
            overlayY: overlayFallbackY,
            offsetY: -offsetY
          }
        ])
        .withDefaultOffsetX(offsetX)
        .withDefaultOffsetY(offsetY);
        /*
        return this._overlay.position()
          .connectedTo(element,
              {originX: posX, originY: originY},
              {overlayX: posX, overlayY: overlayY})
          .withFallbackPosition(
              {originX: fallbackX, originY: originY},
              {overlayX: fallbackX, overlayY: overlayY})
          .withFallbackPosition(
              {originX: posX, originY: fallbackOriginY},
              {overlayX: posX, overlayY: fallbackOverlayY})
          .withFallbackPosition(
              {originX: fallbackX, originY: fallbackOriginY},
              {overlayX: fallbackX, overlayY: fallbackOverlayY})
          .withOffsetX(offsetX)
          .withOffsetY(offsetY);
          */
    }

    private _cleanUpSubscriptions(): void {
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
        if (this._positionSubscription) {
            this._positionSubscription.unsubscribe();
        }
    }

    @HostListener('mousedown') _handleMousedown(event: MouseEvent): void {
        if (event && !isFakeMousedownFromScreenReader(event)) {
            this._openedByMouse = true;
        }
    }
}
