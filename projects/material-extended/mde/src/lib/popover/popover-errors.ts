/**
 * Throws an exception for the case when popover trigger doesn't have a valid mde-popover instance
 */
export function throwMdePopoverMissingError() {
  throw Error(`mde-popover-trigger: must pass in an mde-popover instance.

    Example:
      <mde-popover #popover="mdePopover"></mde-popover>
      <button [mdePopoverTriggerFor]="popover"></button>`);
}

/**
 * Throws an exception for the case when popover's mdePopoverPositionX value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 */
export function throwMdePopoverInvalidPositionX() {
  throw Error(`mdePopoverPositionX value must be either 'before' or after'.
      Example: <mde-popover mdePopoverPositionX="before" #popover="mdePopover"></mde-popover>`);
}

/**
 * Throws an exception for the case when popover's mdePopoverPositionY value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 */
export function throwMdePopoverInvalidPositionY() {
  throw Error(`mdePopoverPositionY value must be either 'above' or below'.
      Example: <mde-popover mdePopoverPositionY="above" #popover="mdePopover"></mde-popover>`);
}
