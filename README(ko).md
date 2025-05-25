# 안동 간고등어 레시피 라이브러리, ASMR.js

## 소개

**`ASMR.js`**는 **안동시**의 요리인 **안동 간고등어**의 **레시피 및 재료**를 준비하는 데 도움이 되는 **JS 라이브러리**입니다.

## 사용

### 1. HTML Script

프로젝트에 ASMR.js 라이브러리를 추가 후, HTML에 다음 코드를 추가하세요.
```html
<script src="ASMR.js"></script>
<script>
  // ASMR.js Codes
</script>
```

### 2. HTML Module

프로젝트에 ASMR.js 라이브러리를 추가 후, HTML에 다음 코드를 추가하세요.
```html
<script type="module">
  import {
    printAll,
    getTotalCookTime
  } from './ASMR.js';

  // ASMR.js 코드들
</script>
```

## Code

ASMR.js 라이브러리에는 다음 기능과 같은 코드가 포함되어 있습니다.

### `printSeasonings()`

양념장에 팔요한 재료들을 출력합니다.

### `printIngredients()`

주 요리에 필요한 재료들을 출력합니다.

### `printRecipe()`

각 단계에 대한 자세한 설명과 예상 시간이 포함된 전체 요리법 목록을 출력합니다.

### `getStep(stepNumber)`

특정 단계를 반환합니다.

### `getStepTime(stepNumber)`

특정 조리 단계에 대한 예상 시간을 반환합니다.

### `getTotalCookTime()`

총 예상 조리 시간을 계산하여 반환합니다.

### `getLongestStep()`

레시피 중 가장 소요시간이 긴 단계를 찾아 반환합니다.

### `printAll()`

양념, 재료, 요리 단계 모두를 한꺼번에 출력합니다.
