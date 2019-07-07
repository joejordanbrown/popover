# Material Extended for Angular - Popover

[![npm version](https://badge.fury.io/js/%40material-extended%2Fmde.svg)](https://www.npmjs.com/package/%40material-extended%2Fmde)
[![Build Status](https://travis-ci.org/material-extended/popover.svg?branch=master)](https://travis-ci.org/material-extended/popover)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Join the chat at https://gitter.im/material-extended/mde](https://badges.gitter.im/material-extended/mde.svg)](https://gitter.im/material-extended/mde?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

#### Links
[Material Popover Demo](https://uixd.co.uk/open-source-software/material-extended/demo) | [StackBlitz Template](https://stackblitz.com/edit/mde-popover)



### Project status
Angular Material Extended is production ready.

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

`yarn add @material-extended/mde`
or
`npm install @material-extended/mde`

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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MdePopoverModule } from '@material-extended/mde';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdePopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Todo
1. A design document needs creating to finalise requirements and API specifications.
Once a document is created the component can be refactored and released as beta for testing.
2. Refactor now that @angular/cdk is released.


### Available features

| Feature | Notes                                                                                | Docs                                                                        |
|---------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| popover | In-progress ([popover demo](https://uixd.co.uk/open-source-software/material-extended/demo)) | [Docs](https://github.com/material-extended/mde/blob/master/projects/material-extended/mde/src/lib/popover/popover.md) |


### Issues

Please report bugs and issues [here](https://github.com/material-extended/mde/issues).

### 

### License
MIT © [Joe Jordan Brown](https://github.com/joejordanbrown)

[Angular Popover by UIXD](https://uixd.co.uk)
