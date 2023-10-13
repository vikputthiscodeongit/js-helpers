# js-helpers
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/js-helpers)](https://www.npmjs.com/package/@codebundlesbyvik/js-helpers)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/js-helpers)](https://www.npmjs.com/package/@codebundlesbyvik/js-helpers)

JavaScript helper functions for various operations, used across my projects.

<br>

## Installation
Install package from npm

``` shell
npm install @codebundlesbyvik/js-helpers
```

<br>

Import the helpers you need...
``` javascript
import { getElPropValue, motionAllowed } from "@codebundlesbyvik/js-helpers";
```

...or import the module in its entirety.
``` javascript
import * as helpers from "@codebundlesbyvik/js-helpers";
```

<br>

## Functions
- [createEl](#createeltagname-attrs)
- [createEls](#createelselskeletons)
- [cssTimeToMs](#csstimetomstime)
- [fetchWithTimeout](#fetchwithtimeout-resource-fetchoptions-timeout-)
- [getCssUnit](#getcssunitvalue)
- [getElPropValue](#getelpropvalueel-prop)
- [getNumberArrayAverage](#getnumberarrayaveragearray-round)
- [isMotionAllowed](#ismotionallowed)
- [sleep](#sleepms)

**\*** indicates a required parameter.

<br>

### `createEl(tagName, attrs)`
Create and return an `HTMLElement`.

#### Parameters
 - **\*** `tagName` (`String`): The `HTMLElement`'s tag name.
 - `attrs` (`Object`): Individual property - value pairs to add to the `HTMLElement`.

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

### `createEls(elSkeletons)`
Create and return an object of `HTMLElement`s.

#### Parameters
 - **\*** `elSkeletons` (`Object`): An object that consists of multiple [createEl](#createeltagname-attrs) `tagName` / `attrs` entries.

#### Example
```javascript
const SKELETONS = {
    fieldset: {
        el: "fieldset",
    },
    field: {
        el: "div",
        attrs: {
            class: "field",
        },
    },
    label: {
        el: "label",
        attrs: {
            for: "example-input"
        }
    },
    input: {
        el: "input",
        attrs: {
            id: "example-input",
            name: "example-input",
            placeholder: "Example input",
        }
    }
};

createEls(SKELETONS);

// {
//     fieldset: <fieldset></fieldset>,
//     field: <div class="field"></div>,
//     label: <label for="example-input"></label>,
//     input: <input id="example-input" name="example-input" placeholder="Example input" />
// }
```

<br>

### `cssTimeToMs(time)`
Convert a 'CSS-style time' to a `Number` of milliseconds.

If the given value is unitless, it'll be returned as-is. If it has an unrecognized unit, the returned value will be `null`.

#### Parameters
 - `time` (`String`): 'CSS-style' time duration.

#### Supported units
 - `ms`: Milliseconds
 - `s`: Seconds
 - `h`: Hours
 - `d`: Days
 - `w`: Weeks
 - `y`: Years - **assumes 1 year = 365 days**

#### Example
``` javascript
cssTimeToMs("2s");
// 2000

cssTimeToMs("0.25d");
// 21600000

cssTimeToMs("-1w");
// -604800000

cssTimeToMs("1asdf");
// null

cssTimeToMs("20");
// 20
```

<br>

### `fetchWithTimeout({ resource, fetchOptions, timeout })`
Make a `fetch()` call that's aborted by an `AbortController` after a given amount of time.

#### Parameters
A single object, containing:
 - **\*** `resource` (`RequestInfo | URL`): Location of the resource.
 - `fetchOptions` (`RequestInit`): [Options accepted by `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch#options).
 - `timeout` (`Number`): Time in milliseconds after which `AbortController.abort()` is called and the `fetch()` is aborted. Default is `8000`.

#### Example
``` javascript
// Make a GET request that's canceled if no response is returned within 10 seconds.
await fetchWithTimeout({
    resource: "target-resource-url",
    fetchOptions: {
        method: "GET"
    },
    timeout: 10000
});
```

<br>

### `getCssUnit(value)`
Get the unit of a quantitative 'CSS-style' value.

If the given value has no unit, the returned value will be `null`.

#### Parameters
 - `value` (`String`): 'CSS-style' value to get the unit from.

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
 - **\*** `el` (`Element`): The target.
 - **\*** `prop` (`String`): `Element` property to retrieve.

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

### `getNumberArrayAverage(array, round)`
Get the average of an array of `Number`s.

#### Parameters
 - **\*** `array` (`Number[]`): Array to check.
 - `round` (`"floor" | "ceil" | false`): Rounding method to apply to the average. Default is `false`.

#### Example
``` javascript
getNumberArrayAverage([3, 8, 41, 88, 1024], "floor");
// 232
```

<br>

### `getPseudoRandomIntBelow(max, includeMax)`
Generate and return a pseudo-random integer below a given integer.

⚠️ **Makes use of [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), which ISN'T cryptographically secure. You WILL be fired if you misuse this function in an attempt to generate secure, random integers.** ⚠️

#### Parameters
 - **\*** `max` (`Number`): Depending on `includeMax`, the returned integer will be either equal to or below this number.
 - `includeMax` (`Boolean`): Whether or not to include `max` when generating the integer. Default is `false`.

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

### `sleep(ms)`
Wait for a certain amount of time before continuing script execution.

#### Parameters
 - **\*** `ms` (`Number`): Duration after which script execution will continue.

#### Example
``` javascript
// Wait for 3 seconds before doing something else.
await timeout(3000);
```

<br>

## Migrating from `@codebundlesbyvik/js-*-operations`
In case anyone was actually using any of my previous, now deprecated JavaScript helper packages: here's how to make a smooth transition.

* **Functions that already existed haven't undergone breaking changes.** New features may have been added, but these arent't breaking.
* **Some functions have been renamed.** Each function lives in a seperate file, and each file carries the same name as its function.
* Typings have been added.

So in the worst case, all you need to do is update your imports.

### Renamed functions
* `getPropValue()` > `getElPropValue()`
* `getRandomIntUnder()` > `getPseudoRandomIntBelow()`
* `getUnit()` > `getCssUnit()`
* `motionAllowed()` > `isMotionAllowed()`
* `timeToMs()` > `cssTimeToMs()`

<br>

## License

MIT © [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
