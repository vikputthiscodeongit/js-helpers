# js-helpers
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/js-helpers)](https://www.npmjs.com/package/@codebundlesbyvik/js-helpers)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/js-helpers)](https://www.npmjs.com/package/@codebundlesbyvik/js-helpers)

JavaScript helper functions for various client sided operations, used across my projects.

<br>

## Table of Contents
* [Compatibility](#compatibility)
* [Usage](#usage)
* [Functions](#functions)
  * [createEl](#createeltagname-attrs)
  * [cssDurationToMs](#cssdurationtomsduration)
  * [fetchWithTimeout](#fetchwithtimeoutresource-fetchoptions-timeoutduration)
  * [getAverage](#getaveragearray-round)
  * [getCssPropValue](#getcsspropvalueel-prop)
  * [getCssUnit](#getcssunitvalue)
  * [getPseudoRandomIntBetween](#getpseudorandomintbetweenmin-max)
  * [isMotionAllowed](#ismotionallowed)
  * [wait](#waitms-resolvevalue-abortsignal)
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

## Usage
### With a module bundler
Install the package with npm.

``` shell
npm install @codebundlesbyvik/js-helpers
```

Import the helpers you need...

``` javascript
import { getCssPropValue } from "@codebundlesbyvik/js-helpers";
```

... and compile your project with a module bundler.

<br>

### Without a module bundler
[Download the latest release from GitHub](https://github.com/vikputthiscodeongit/js-helpers/releases/latest) and load the helpers you need as an ES Module. Some helpers require [`core-js` polyfills](https://github.com/zloirock/core-js/releases/latest), which are to be loaded from `./corejs/modules` - a directory whose location is relative to the one where the `js-helpers` are stored.

<br>

## Functions
* [createEl](#createeltagname-attrs)
* [cssDurationToMs](#cssdurationtomsduration)
* [fetchWithTimeout](#fetchwithtimeoutresource-fetchoptions-timeoutduration)
* [getAverage](#getaveragearray-round)
* [getCssPropValue](#getcsspropvalueel-prop)
* [getCssUnit](#getcssunitvalue)
* [getPseudoRandomIntBetween](#getpseudorandomintbetweenmin-max)
* [isMotionAllowed](#ismotionallowed)
* [wait](#waitms-resolvevalue-abortsignal)

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

### `cssDurationToMs(duration)`
Convert a CSS-style time duration value to a `Number` of milliseconds.

If the given value has no or an unrecognized unit, the returned value will be `null`.

#### Parameters
* `duration` (`String`): 'CSS-style' time duration.

#### Supported units
* `ms`: Milliseconds
* `s`: Seconds
* `h`: Hours
* `d`: Days
* `w`: Weeks

#### Example
``` javascript
cssDurationToMs("150ms");
// 150

cssDurationToMs("2s");
// 2000

cssDurationToMs("0.25d");
// 21600000

cssDurationToMs("-1w");
// -604800000

cssDurationToMs("1y");
// null

cssDurationToMs("1asdf");
// null

cssDurationToMs("20");
// null
```

<br>

### `fetchWithTimeout(resource, fetchOptions, timeoutDuration)`
Make a `fetch()` call that's aborted by an `AbortController` after some amount of time.

#### Parameters
* **\*** `resource` (`RequestInfo | URL`): Location of the resource.
* `fetchOptions` (`{} | RequestInit`): [Options accepted by `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch#options).
* `timeoutDuration` (`8000 | Number`): Time in milliseconds after which `AbortController.abort()` is called and the `fetch()` is aborted.

#### Example
``` javascript
// Make a GET request that's aborted if no response is returned within 8 seconds.
await fetchWithTimeout("https://example.com/api/endpoint");

// Make a POST request that's aborted if no response is returned within 10 seconds.
await fetchWithTimeout("https://example.com/api/endpoint", { method: "POST" }, 10000);
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

If the property is not set or unknown, the returned value will be `null`.

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

If the value has no unit, the returned value will be `null`.

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
- None
* **\*** `min` (`Number`): Positive integer relative to which the returned integer will be equal to or greater than.
* **\*** `max` (`Number`): Positive integer relative to which the returned integer will be smaller than.

#### Example
```javascript
getPseudoRandomIntBetween(0, 10);
// 7
```

<br>

### `isMotionAllowed()`
Check if `prefers-reduced-motion` is set to something other than 'reduce'. Returns a `Boolean`.

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

### `wait(ms, resolveValue, abortSignal)`
Wait for a given amount of time before continuing script execution.

`setTimeout()` wrapped in a `Promise`, which is optionally resolved with `resolveValue` and cancellable via an `AbortController`.

#### Parameters
* **\*** `ms` (`Number`): Time in milliseconds after which script execution will continue.
* `resolveValue` (`undefined` | Any valid `Promise.resolve()` value): Value which the promise will be resolved with.
* `abortSignal` (`undefined | AbortSignal`): `AbortController signal` which the timeout can be cancelled with.

#### Example
``` javascript
// Wait for 3 seconds before doing something else.
await wait(3000);

// Wait for 5 seconds before doing something else - or less if aborted earlier.
const abortController = new AbortController();
await wait(5000, "5 seconds have passed", abortController.signal);
```

<br>

## Migrating
### From version 1
All parameters for all functions except `fetchWithTimeout` and `wait` are now type checked on runtime.

* `createEls()` > **Removed** - write this code yourself (it was just a for loop).
* `getRandomIntUnder()` > **Removed** - use `getPseudoRandomIntBetween(0, x)` instead.
* `getCssUnit()` > **Breaking change** - `y` unit now returns null.
* `wait()` > **Breaking change** - `abortController` parameter has been changed to `abortSignal`.

<br>

### From `@codebundlesbyvik/js-*-operations`
* `createEls()` > **Removed**
  * Write this code yourself - it was just a `for` loop.
* `getPropValue()` > `getCssPropValue()`
* `getRandomIntUnder()` > **Removed** - use `getPseudoRandomIntBetween(0, x)` instead.
* `getUnit()` > `getCssUnit()`
  * Only supports valid CSS units.
* `timeToMs()` > `cssDurationToMs()`

Changes to existing functions are small; if you were using them as intended, migration should be free of issues. Any problems you do encounter should be easily fixable by the error thrown.

<br>

## License
MIT © 2024 [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
