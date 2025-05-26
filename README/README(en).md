# Andong Salted Mackerel Recipe JS Library — ASMR.js

## Introduction

**`ASMR.js`** is a lightweight **JavaScript library** designed to help you organize the **ingredients** and **step-by-step recipe** for **Andong Salted Mackerel**, a traditional dish from **Andong City, Korea**.

## How to Use

### 1. Using a Script Tag

Include the script directly in your HTML:

```html
<script src="ASMR.js"></script>
<script>
  printAll();
  console.log(getTotalCookTime());
</script>
```

### 2. Using as a Module

Import the library as a module:

```html
<script type="module">
  import {
    printAll,
    getTotalCookTime
  } from './ASMR.js';

  printAll();
  console.log(getTotalCookTime());
</script>
```

## Features

The ASMR.js library provides the following functions:

### Print Functions

* `printSeasonings()`  
Prints the ingredients used to make the maturation sauce.

* `printIngredients()`
Prints the main ingredients required for the dish.

* `printRecipe()`
Prints the full recipe steps, each with descriptions and estimated cooking time.

* `printAll()`
Prints all of the above at once: seasonings, ingredients, and steps.

### Get Functions

* `getStep(stepNumber)`  
Returns the content of a specific recipe step.

* `getStepTime(stepNumber)`  
Returns the estimated time for a specific cooking step.

* `getStepTimes()`  
Returns time information for each step (not aggregated).

* `getTotalCookTime()`
Calculates and returns the total cooking time across all steps.

* `getLongestStep()`
Returns the step that takes the longest time.

### Search Functions

* `searchStep(keyword)`  
Returns recipe steps that contain the keyword.

* `searchIngredients(keyword)`
Returns ingredients that contain the keyword.

* `searchSeasoning(keyword)`
Returns seasonings that contain the keyword.

## License

[MIT License](../LICENSE).  
Because delicious recipes should be open-source.
