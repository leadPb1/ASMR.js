# 안동 간고등어 레시피 JS 라이브러리 — ASMR.js

## 설명

**`ASMR.js`**는 **안동 간고등어**의 **재료**와 **단계별 레시피**를 구성하는 데 도움이 되도록 설계된 가벼운 **자바스크립트 라이브러리**입니다. 안동 간고등어는 **대한민국 안동시**의 전통 요리입니다.

## 사용법

### 1. 스크립트 태그 사용하기

스크립트 태그를 통해 가져옵니다.

```html
<script src="ASMR.js"></script>
<script>
  printAll();
  console.log(getTotalCookTime());
</script>
```

### 2. 모듈 사용하기

라이브러리를 모듈로 가져옵니다.

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

## 기능

ASMR.js는 다음과 같은 기능을 제공합니다.

### 출력 함수들

* `printSeasonings()`  
전체 숙성장 재료를 출력합니다.

* `printIngredients()`
전체 주 재료를 출력합니다.
* `printRecipe()`
전체 레시피를 출력합니다.

* `printAll()`
위의 모든 내용을 한꺼번에 출력합니다.

### 가져오기 함수들

* `getStep(stepNumber)`  
특정 레시피 단계의 내용을 반환합니다.

* `getStepTime(stepNumber)`  
특정 레시피 단계에 대한 소요시간을 반환합니다.

* `getStepTimes()`  
각 단계에 대한 시간 정보를 반환합니다. 시간 정보는 합하지 않습니다.

* `getTotalCookTime()`
총 소요시간을 계산하여 반환합니다.

* `getLongestStep()`
가장 소요시간이 오래 걸리는 레시피 단계를 반환합니다.

### 검색 함수들

* `searchStep(keyword)`  
키워드가 포함된 레시피 단계를 반환합니다.

* `searchIngredients(keyword)`
키워드가 포함된 주 재료를 반환합니다.

* `searchSeasoning(keyword)`
키워드가 포함된 숙성장 재료를 반환합니다.

## 라이선스

[MIT 라이선스](../LICENSE).
