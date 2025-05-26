# Andong Salted Mackerel Recipe JS Library, ASMR.js

## Introduce

**`ASMR.js`** is a **JavaScript library** that helps you prepare **recipes and ingredients** for **Andong Salted Mackerel**, a dish from **Andong City**.

## Use

### 1. HTML Script

After adding ASMR.js to your project, add the following to your HTML:
```html
<script src="ASMR.js"></script>
<script>
  // ASMR.js Codes
</script>
```

### 2. HTML Module

After adding ASMR.js to your project, add the following to your HTML:
```html
<script type="module">
  import {
    printAll,
    getTotalCookTime
  } from './ASMR.js';

  // ASMR.js codes
</script>
```

## Code

The ASMR.js library contains code for the following functions:

### `printIngredients()`

Prints the main ingredients required for the dish.

### `printRecipe()`

Prints the full list of recipe steps, each with detailed descriptions and estimated time.

### `getStep(stepNumber)`

Returns the content of a specific step.

### `getStepTime(stepNumber)`

Returns the estimated time for a specific cooking step.

### `getTotalCookTime()`

Calculates and returns the total estimated cooking time.

### `getLongestStep()`

Finds and returns the longest step in the recipe.

### `printAll()`

Prints everything the seasonings, ingredients, and recipe steps all at once.

### `getStepTimes()`

Returns time information for all steps. Does not aggregate all time information.
