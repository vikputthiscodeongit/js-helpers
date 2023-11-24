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
  * [getCssPropValue](#getcsspropvalueel-prop)
  * [getCssUnit](#getcssunitvalue)
  * [getPseudoRandomIntBetween](#getpseudorandomintbetweenmin-max)
  * [wait](#waitms-promiseresolvevalue-abortcontroller)
* [Migrating](#migrating)
  * [From version 1](#from-version-1)
  * [From `@codebundlesbyvik/js-*-operations`](#from-codebundlesbyvikjs--operations)
* [License](#license)

<br>

## Compatibility
The distributables are compiled with the following `browserslist`:
```
"> 0.1% and fully supports async-functions"
```
Practically speaking, all popular browser versions released from the start of 2017 and onwards are supported.

<br>

## Installation
### Usage within the Node.js ecosystem
Install the package with npm.

``` shell
npm install @codebundlesbyvik/js-helpers
```

Import the helpers you need...

``` javascript
import { getCssPropValue } from "@codebundlesbyvik/js-helpers";
```

<br>

### Standalone usage
[Download the latest release from GitHub](https://github.com/vikputthiscodeongit/js-helpers/releases/latest).

Then you can either:
* Import the helpers you need from the index file, or
* Import the helpers you need separately.

You'll need to include the required [`core-js` polyfills](https://github.com/zloirock/core-js/releases/latest) yourself. These are loaded from a subdirectory `corejs/modules`, whose location should be relative to the directory where the `js-helpers` files are stored.

<br>

## Functions
* [createEl](#createeltagname-attrs)
* [cssDurationToMs](#cssdurationtomstime)
* [fetchWithTimeout](#fetchwithtimeoutresource-fetchoptions-timeout)
* [getAverage](#getaveragearray-round)
* [getCssPropValue](#getcsspropvalueel-prop)
* [getCssUnit](#getcssunitvalue)
* [getPseudoRandomIntBetween](#getpseudorandomintbetweenmin-max)
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

### `getCssPropValue(el, prop)`
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

getCssPropValue(el, "margin-bottom");
// "0.75rem"

getCssPropValue(el, "background-color");
// "black"

getCssPropValue(el, "box-shadow");
// null

getCssPropValue(el, "non-existent");
// null
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

### `getPseudoRandomIntBetween(min, max)`
Generate and return a positive pseudo-random integer between two given integers.

⚠️ **Makes use of [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), which ISN'T cryptographically secure. You WILL BE FIRED if you misuse this function in an attempt to generate secure, random integers.** ⚠️

#### Parameters
* **\*** `min` (`Number`): Positive integer relative to which the returned integer will be equal to or greater than.
* **\*** `max` (`Number`): Positive integer relative to which the returned integer will be smaller than.

#### Example
```javascript
getPseudoRandomIntBetween(0, 10);
// 7
```

<br>

### `wait(ms, promiseResolveValue, abortController)`
Wait for a given amount of time before continuing script execution.

`setTimeout()` wrapped in a `Promise`, which is optionally resolved with `promiseResolveValue` and cancellable via an `AbortController`.

#### Parameters
* **\*** `ms` (`Number`): Time in milliseconds after which script execution will continue.
* `promiseResolveValue` (`undefined` | Any valid `Promise.resolve()` value): Value which the promise will be resolved with.
* `abortController` (`undefined | AbortController`): `AbortController` which the timeout can be cancelled with.

#### Example
``` javascript
// Wait for 3 seconds before doing something else.
await wait(3000);

// Wait for 5 seconds before doing something else - or less if aborted earlier.
const abortController = new AbortController();
await wait(5000, "5 seconds have passed", abortController);
```

<br>

## Migrating
### From version 1
All function parameters are now type checked on runtime.

* `createEls()` > **Removed** - write this code yourself (it was just a for loop)
* `getRandomIntUnder()` > **Removed** - use `getPseudoRandomIntBetween(0, x)` instead
* `motionAllowed()` > **Removed** - write this line of code yourself

<br>

### From `@codebundlesbyvik/js-*-operations`
In case anyone was actually using any of my previous, now deprecated JavaScript helper packages: here's how to make a smooth transition.

**Functions that already existed haven't undergone breaking changes - provided you were using them properly previously.** All function parameters are now typed and type checked on runtime.

* `createEls()` > **Removed** - write this code yourself (it was just a for loop)
* `getPropValue()` > `getCssPropValue()`
* `getUnit()` > `getCssUnit()`
* `getRandomIntUnder()` > **Removed** - use `getPseudoRandomIntBetween(0, x)` instead
* `motionAllowed()` > **Removed** - write this line of code yourself
* `timeToMs()` > `cssDurationToMs()`

<br>

## License
MIT © 2023 [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
