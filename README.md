# JavaScript Addition Operator's Unexpected Behavior with undefined, null, and NaN

This repository demonstrates unexpected behavior of JavaScript's addition operator (+) when dealing with `undefined`, `null`, and `NaN` values.  The addition operator behaves differently based on these values, sometimes returning `NaN` or unexpectedly coercing values.

## Bug Description

The `+` operator doesn't behave consistently when used with `undefined`, `null`, and `NaN`. This can lead to unexpected results and make debugging more challenging.

## Code Example (bug.js)

```javascript
function foo(a, b) {
  return a + b;
}

console.log(foo(undefined, 1)); // NaN
console.log(foo(null, 1)); // 1
console.log(foo(NaN, 1)); // NaN
```

## Solution (bugSolution.js)

The solution involves explicitly handling these special cases with checks and appropriate default values or error handling.
