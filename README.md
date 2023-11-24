# js-helpers
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/js-helpers)](https://www.npmjs.com/package/@codebundlesbyvik/js-helpers)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/js-helpers)](https://www.npmjs.com/package/@codebundlesbyvik/js-helpers)

JavaScript helper functions for various operations, used across my projects.

<br>

## Table of Contents
* [Compatibility](#compatibility)
* [Installation](#installation)
* [Functions](#functions)
  * [createEl](#createeltagname-attrs)
  * [cssDurationToMs](#cssdurationtomstime)
  * [fetchWithTimeout](#fetchwithtimeoutresource-fetchoptions-timeout)
  * [getAverage](#getaveragearray-round)
  * [getCssUnit](#getcssunitvalue)
  * [getElPropValue](#getelpropvalueel-prop)
  * [isMotionAllowed](#ismotionallowed)
  * [wait](#waitms-promiseresolvevalue-abortcontroller)
* [Migrating from `@codebundlesbyvik/js-*-operations`](#migrating-from-codebundlesbyvikjs--operations)
  * [Renamed functions](#renamed-functions)
* [License](#license)

<br>

## Compatibility
The distributables are compiled with the following `browserslist`:
```
"> 0.1% and fully supports object-entries"
```
Practically speaking, all popular browser versions released after H2 2016 are supported.

<br>

## Installation
### Usage within the Node.js ecosystem
Install the package with npm.

``` shell
npm install @codebundlesbyvik/js-helpers
```

Import the helpers you need...

``` javascript
import { getElPropValue, isMotionAllowed } from "@codebundlesbyvik/js-helpers";
```

...or import the bundle in its entirety.

``` javascript
import * as helpers from "@codebundlesbyvik/js-helpers";
```

<br>

### Standalone usage
[Download the latest release from GitHub](https://github.com/vikputthiscodeongit/js-helpers/releases/latest).

Then you can either:
* Use the UMD bundle, or
* Import the helpers you need from the index file, or
* Import the helpers you need seperately.

The UMD bundle has the required `core-js` polyfills inlined.<br>
If you use the module files then you'll need to include the required [`core-js` polyfills](https://github.com/zloirock/core-js/releases/latest) yourself. These are loaded from a subdirectory `corejs/modules`, whose location should be relative to the directory where the `js-helpers` files are stored.

<br>

## Functions
* [createEl](#createeltagname-attrs)
* [cssDurationToMs](#cssdurationtomstime)
* [fetchWithTimeout](#fetchwithtimeoutresource-fetchoptions-timeout)
* [getAverage](#getaveragearray-round)
* [getCssUnit](#getcssunitvalue)
* [getElPropValue](#getelpropvalueel-prop)
* [isMotionAllowed](#ismotionallowed)
* [wait](#waitms-promiseresolvevalue-abortcontroller)

<br>

* Required parameters are indicated with **\***.
* Default values for required parameters are listed first in the array of accepted parameter value types.

<br>

### `createEl(tagName, attrs)`
Create and return an `HTMLElement`.

#### Parameters
* **\*** `tagName` (`String`): The `HTMLElement`'s tag name.
* `attrs` (`Object`): Individual attribute - value pairs to set on the `HTMLElement`.

Special case is the `text` attribute. Use it to set the `HTMLElement`'s `textContent`.

#### Example
```javascript
const ATTRS = {
    class: "example-div",
    id: "example-div-1",
    ariaHidden: "true",
    text: "This is an example."
};

createEl("div", ATTRS);

// <div class="example-div" id="example-div-1" aria-hidden="true">
//     This is an example
// </div>
```

<br>

### `cssDurationToMs(time)`
Convert a 'CSS-style time' to a `Number` of milliseconds.

If the given value has no or an unrecognized unit, the returned value will be `null`.

#### Parameters
* `time` (`String`): 'CSS-style' time duration.

#### Supported units
* `ms`: Milliseconds
* `s`: Seconds
* `h`: Hours
* `d`: Days
* `w`: Weeks
* `y`: Years - **assumes 1 year = 365 days**

#### Example
``` javascript
cssDurationToMs("2s");
// 2000

cssDurationToMs("0.25d");
// 21600000

cssDurationToMs("-1w");
// -604800000

cssDurationToMs("1asdf");
// null

cssDurationToMs("20");
// null
```

<br>

### `fetchWithTimeout(resource, fetchOptions, timeout)`
Make a `fetch()` call that's aborted by an `AbortController` after a given amount of time.

#### Parameters
* **\*** `resource` (`RequestInfo | URL`): Location of the resource.
* `fetchOptions` (`{} | RequestInit`): [Options accepted by `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch#options).
* `timeout` (`8000 | Number`): Time in milliseconds after which `AbortController.abort()` is called and the `fetch()` is aborted.

#### Example
``` javascript
// Make a GET request that's aborted if no response is returned within 10 seconds.
await fetchWithTimeout("target-resource-url", { method: "GET" }, 10000);
```

<br>

### `getAverage(array, round)`
Get the average of an array of `Number`s.

#### Parameters
* **\*** `array` (`Number[]`): Array to check.
* `round` (`"floor" | "ceil"`): Rounding method to apply to the average.

#### Example
``` javascript
getAverage([1, 2, 3]);
// 2

getAverage([3, 8, 41, 88, 1024]);
// 232.8

getAverage([3, 8, 41, 88, 1024], "floor");
// 232

getAverage([0.1, 0.33, 0.82, 1], "ceil");
// 1
```

<br>

### `getCssUnit(value)`
Get the unit of a quantitative 'CSS-style' value.

If the given value has no unit, the returned value will be `null`.

#### Parameters
* `value` (`String`): 'CSS-style' value to get the unit from.

#### Example
``` javascript
getCssUnit("2px");
// "px"

getCssUnit(".5ms");
// "ms"

getCssUnit("100");
// null
```

<br>

### `getElPropValue(el, prop)`
Get an `Element`'s CSS property value.

If the given property is not set, the returned value will be `null`.

#### Parameters
* **\*** `el` (`Element`): The target.
* **\*** `prop` (`String`): `Element` property to retrieve.

#### Example
``` javascript
const el = document.querySelector("#example-div-1");
// Has the following properties set:
// margin-bottom: 0.75rem;
// background-color: black;

getElPropValue(el, "margin-bottom");
// "0.75rem"

getElPropValue(el, "background-color");
// "black"

getElPropValue(el, "non-existent");
// null
```

<br>

### `getPseudoRandomIntBelow(max, includeMax)`
Generate and return a pseudo-random integer below a given integer.

⚠️ **Makes use of [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), which ISN'T cryptographically secure. You WILL BE FIRED if you misuse this function in an attempt to generate secure, random integers.** ⚠️

#### Parameters
* **\*** `max` (`Number`): Depending on `includeMax`, the returned integer will be either equal to or below this number.
* `includeMax` (`false | Boolean`): Whether or not to include `max` when generating the integer.

#### Example
```javascript
getPseudoRandomIntBelow(10);
// 7

getPseudoRandomIntBelow(10, true);
// 10
```

<br>

### `isMotionAllowed()`
Check if `prefers-reduced-motion` is set to something other than 'reduce'. Returns a `Boolean`.

#### Parameters
- None

#### Example
``` javascript
// 'prefers-reduced-motion' is set to 'reduce'.
isMotionAllowed();
// false

// 'prefers-reduced-motion' is set to 'no-preference'.
isMotionAllowed();
// true

// 'prefers-reduced-motion' is unsupported.
isMotionAllowed();
// true
```

<br>

### `wait(ms, promiseResolveValue, abortController)`
Wait for a certain amount of time before continuing script execution.<br>
This is `setTimeout()` wrapped in a `Promise`, which is optionally resolved with `promiseResolveValue` and cancellable via an `AbortController`.

#### Parameters
* **\*** `ms` (`Number`): Duration after which script execution will continue.
* `promiseResolveValue` (`undefined` | Valid `Promise.resolve()` value): Value which the promise will be resolved with.
* `abortController` (`undefined | AbortController`): `AbortController` to call in order to cancel the timeout.

#### Example
``` javascript
// Wait for 3 seconds before doing something else.
await wait(3000);

// Wait for 5 seconds - or less if aborted earlier - before doing something else.
const abortController = new AbortController();
await wait(5000, "5 seconds have passed", abortController);
```

<br>

## Migrating from `@codebundlesbyvik/js-*-operations`
In case anyone was actually using any of my previous, now deprecated JavaScript helper packages: here's how to make a smooth transition.

* **Functions that already existed haven't undergone breaking changes.**
  * Any new features aren't breaking.
* **Some functions have been renamed.**

So in the worst case, all you need to do is update your imports.

### Renamed functions
* `getPropValue()` > `getElPropValue()`
* `getRandomIntUnder()` > `getPseudoRandomIntBelow()`
* `getUnit()` > `getCssUnit()`
* `motionAllowed()` > `isMotionAllowed()`
* `timeToMs()` > `cssTimeToMs()`

<br>

## License
MIT © 2023 [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
