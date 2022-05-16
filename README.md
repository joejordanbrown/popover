# Angular Popover

This is forked from joe brown

#### Links

[Popover Demo](https://uixd.co.uk/open-source-software/material-extended/demo) | [StackBlitz Template](https://stackblitz.com/edit/mde-popover)

### Project status

Angular Popover is production ready.

This was originally created as an example for a `@angular/material` issue feature request.
Issue can be found at [angular/material2#2691](https://github.com/angular/material2/issues/2691)

If you'd like to contribute please create an issue or pull request.

### Examples

**Material theme picker**

[![Material theme picker](https://media.giphy.com/media/jsxheZJXN1346GD5St/giphy.gif)](https://stackblitz.com/edit/angular-popover-demo)

**Standard popover**

![image](https://cloud.githubusercontent.com/assets/10200431/22394189/02e9b21e-e511-11e6-9f91-c6b470a6b212.png)

![image](https://cloud.githubusercontent.com/assets/10200431/22394186/e21a235c-e510-11e6-9cde-948b1a4382bc.png)

**Google+ style popover**

![image](https://cloud.githubusercontent.com/assets/10200431/22397870/4f27ddba-e573-11e6-943f-2d737b59d39e.png)

### Installation

Install npm package using:

`yarn add @omega-ads/popover`
or
`npm install @omega-ads/popover`

Install required packages @angular/cdk

`yarn add @angular/cdk`
or
`npm install @angular/cdk`

### Initial setup

The CDK overlays depend on a small set of structural styles to work correctly. If you're using Angular Material, these styles have been included together with the theme, otherwise if you're using the CDK on its own, you'll have to include the styles yourself. You can do so by importing the prebuilt styles in your global stylesheet:

@import '~@angular/cdk/overlay-prebuilt.css';

### Import module

app.module.ts

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MdePopoverModule } from "@omega-ads/popover";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MdePopoverModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
