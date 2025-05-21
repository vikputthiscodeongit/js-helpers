# js-helpers
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/js-helpers)](https://www.npmjs.com/package/@codebundlesbyvik/js-helpers)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/js-helpers)](https://www.npmjs.com/package/@codebundlesbyvik/js-helpers)

0-dependency JavaScript helper functions for various operations, used across my projects.

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
  * [wait](#waitduration-resolvevalue-abortsignal)
* [Migrating](#migrating)
  * [From version 1](#from-version-1)
  * [From `@codebundlesbyvik/js-*-operations`](#from-codebundlesbyvikjs--operations)
* [License](#license)

<br>

## Compatibility
All helpers are compatible with the ECMAScript 2015 (ES6) specification except for `fetchWithTimeout`, which is an `async` function and thus requires an ECMAScript 2017 (ES8) compatible environment.

Some helpers utilize DOM methods and as such require an environment that supports those.

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

... and build your project.

<br>

### Without a module bundler
[Download the latest release from GitHub](https://github.com/vikputthiscodeongit/js-helpers/releases/latest) and import the helpers you need as an ES Module.

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
* [wait](#waitduration-resolvevalue-abortsignal)

<br>

### `createEl(tagName, attrs)`
Create and return an `HTMLElement`.

#### Parameters
* `tagName` (`string`): The `HTMLElement`'s tag name.
* `attrs?` (`object`): Individual attribute - value pairs to set on the `HTMLElement`.

Use the `textContent` attribute to set the `HTMLElement`'s `textContent`.

#### Example
```javascript
const ATTRS = {
    class: "example-div",
    id: "example-div-1",
    ariaHidden: "true",
    textContent: "This is an example."
};

createEl("div", ATTRS);

// <div class="example-div" id="example-div-1" aria-hidden="true">
//     This is an example
// </div>
```

<br>

### `cssDurationToMs(duration)`
Convert a CSS-style time duration value to a `number` of milliseconds.

If the given value has no or an unrecognized unit, the returned value will be `null`.

#### Parameters
* `duration` (`string`): 'CSS-style' time duration.

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
Make a `fetch()` call that's aborted by an `AbortController` after a specified amount of time.

#### Parameters
* `resource` (`RequestInfo` | `URL`): Location of the resource. See [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) and/or [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL).
* `fetchOptions = {}` (`RequestInit`): Options for fetch(). See [`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit).
* `timeoutDuration = 8000` (`number`): Time in milliseconds after which `AbortController.abort()` is called and the `fetch()` is aborted.

#### Example
``` javascript
// Make a GET request that's aborted if no response is returned within 8 seconds.
await fetchWithTimeout("https://example.com/api/endpoint");

// Make a POST request that's aborted if no response is returned within 10 seconds.
await fetchWithTimeout("https://example.com/api/endpoint", { method: "POST" }, 10000);
```

<br>

### `getAverage(array, round)`
Get the average of an array of `number`s.

#### Parameters
* `array` (`number[]`): Array to check.
* `round?` (`"floor"` | `"ceil"`): Rounding method to apply to the average.

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
* `el` (`Element`): The target.
* `prop` (`string`): `Element` property to retrieve.

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
* `value` (`string`): 'CSS-style' value to get the unit from.

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

⚠️ __Makes use of [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), which ISN'T cryptographically secure. YOU WILL BE FIRED if you use this helper in production in an attempt to generate secure, random integers.__ ⚠️

#### Parameters
* `min` (`number`): Positive integer relative to which the returned integer will be equal to or greater than.
* `max` (`number`): Positive integer relative to which the returned integer will be smaller than.

#### Example
```javascript
getPseudoRandomIntBetween(0, 10);
// 7
```

<br>

### `isMotionAllowed()`
Check if `prefers-reduced-motion` is set to something other than `reduce`. Returns a `Boolean`.

#### Parameters
* None

#### Example
``` javascript
// 'prefers-reduced-motion: reduce'
isMotionAllowed();
// false

// 'prefers-reduced-motion: no-preference'
isMotionAllowed();
// true

// 'prefers-reduced-motion' is unsupported.
isMotionAllowed();
// true
```

<br>

### `wait(duration, resolveValue, abortSignal)`
Wait for a given amount of time before continuing function execution.

`setTimeout()` wrapped in a `Promise`, which is optionally resolved with `resolveValue` and cancellable via an `AbortController`.

#### Parameters
* `duration` (`number`): Time in milliseconds after which script execution will continue.
* `resolveValue?` (Any valid `Promise.resolve()` value): Value which the promise will be resolved with.
* `abortSignal?` (`AbortSignal`): `AbortController.signal` which the timeout can be cancelled with.

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
Function parameters are now type checked. The following breaking changes were made:

* __Removed__ createEls
  * Write this code yourself - it was just a `for` loop.
* __Removed__ getRandomIntBelow
  * Use `getPseudoRandomIntBetween(0, x)` instead.
* getCssUnit: Removed support for `y` unit - will now return `null`
* wait: Parameter 3 changed from an `AbortController` to an `AbortSignal`

<br>

### From `@codebundlesbyvik/js-*-operations`
Function parameters are now type checked. The following breaking changes were made:

* __Removed__ createEls
  * Write this code yourself - it was just a `for` loop.
* __Removed__ getRandomIntUnder()
  * Use `getPseudoRandomIntBetween(0, x)` instead.
* __Renamed__ getPropValue > getCssPropValue
* __Renamed__ getUnit > getCssUnit
* __Renamed__ timeToMs > cssDurationToMs

More changes were made other than the ones listed above. Problems caused by incompatible changes should be easy to debug by the error thrown.

<br>

## License
MIT © 2025 [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
