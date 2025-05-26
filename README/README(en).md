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

## Features

The ASMR.js library contains code for the following functions:

### Print functions

 * `printSeasonings()` Prints out the ingredients to make the sauce needed for maturation.
 * `printIngredients()` Prints the main ingredients required for the dish.
 * `printRecipe()` Prints the full list of recipe steps, each with detailed descriptions and estimated time.
 * `printAll()` Prints everything the seasonings, ingredients, and recipe steps all at once.

### Get functions

 * `getStep(stepNumber)` Returns the content of a specific step.
 * `getStepTime(stepNumber)` Returns the estimated time for a specific cooking step.
 * `getTotalCookTime()` Calculates and returns the total estimated cooking time.
 * `getLongestStep()` Finds and returns the longest step in the recipe.
 * `getStepTimes()` Returns time information for all steps. Does not aggregate all time information.

### Search functions
 * `searchStep(keyword)` Prints steps that contain a specific keyword.
 * `searchIngredients(keyword)` Prints ingredients that contain a specific keyword.
 * `searchSeasoning(keyword)` Prints seasonings that contain a specific keyword.
