# Performance Tests

## Fucntions, Loops, and Inlining

Run Test with V8 inlining enabled:

``` bash
node functions.js
```

Run Test with V8 inlining disabled:

``` bash
node --max-inlined-bytecode-size=0 functions.js 
```

To view inline functions:

``` bash
node --print-opt-source functions.js 
node --max-inlined-bytecode-size=0 --print-opt-source functions.js 
```
