// andongSaltedMackerel.js
// ASMR은 의도하진 않았는데 하필 ASMR이 딱ㅎ

export const seasonings = [
  "간장 1컵",
  "물 1컵",
  "맛술 2큰술 (선택)",
  "설탕 1큰술 (선택)",
  "생강 몇 조각 (선택)"
];

export const ingredients = [
  "고등어 1마리",
  "굵은 소금 적당량"
];

export const recipeSteps = [
  "1. 고등어를 깨끗이 손질하고 내장을 제거합니다.(소요시간 20분)",
  "2. 굵은 소금을 고등어 겉면과 속에 골고루 뿌려 30분간 절입니다. (소요시간 30분)",
  "3. 절인 고등어를 깨끗이 씻어 소금을 제거합니다. (소요시간 8분)",
  "4. 간장, 물, 맛술, 설탕, 생강을 섞어 숙성장을 만듭니다. (소요시간 6분)",
  "5. 고등어를 숙성장에 완전히 잠기도록 담가 냉장고에서 12~24시간 숙성시킵니다. (소요시간 18시간)",
  "6. 숙성된 간고등어를 꺼내서 구워 먹거나 찌거나 해서 맛있게 즐깁니다."
];

// 피아노학원에서 작업중인데 배고파짐;;
// 아 도대체 누가 피아노학원에서 깃허브 노트북으로 키냐고ㅋㅋㅋㅋㅋ

export function printIngredients() {
  console.log("재료 리스트: ");
  ingredients.forEach(item => console.log("- " + item));
}

export function printRecipe() {
  console.log("조리 순서: ");
  recipeSteps.forEach(step => console.log(step));
}

export function getStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > recipeSteps.length) {
    return "없는 단계입니다.";
  }
  return recipeSteps[stepNumber - 1];
}

export function printAll() {
  console.log("재료 리스트: ");
  ingredients.forEach(item => console.log("- " + item));
  console.log("조리 순서: ");
  recipeSteps.forEach(step => console.log(step));
}

// 배고파졌습니다 간고등어조림 먹으러갈게요 ㅂㅂ

export function getTotalCookTime() {
  let totalMinutes = 0;

  recipeSteps.forEach(step => {
    const match = step.match(/\(소요시간\s*(\d+)분\)/);
    if (match) {
      totalMinutes += parseInt(match[1], 10);
    }
  });

  return `총 조리 시간: ${totalMinutes}분`;
}

export function getStepTime(stepNumber) {
  if (stepNumber < 1 || stepNumber > recipeSteps.length) {
    return "없는 단계입니다.";
  }

  const step = recipeSteps[stepNumber - 1];
  const match = step.match(/\(소요시간\s*(\d+)분\)/);

  if (match) {
    return `${stepNumber}단계 소요시간: ${match[1]}분`;
  } else {
    return `${stepNumber}단계에는 소요시간 정보가 없습니다.`;
  }
}

// 간고등어를 먹으려고 했거든요??? 집에 재료가 없음..

export function getLongestStep() {
  let maxTime = 0;
  let maxIndex = -1;

  recipeSteps.forEach((step, index) => {
    const match = step.match(/\(소요시간\s*(\d+)분\)/);
    if (match) {
      const time = parseInt(match[1], 10);
      if (time > maxTime) {
        maxTime = time;
        maxIndex = index;
      }
    }
  });

  if (maxIndex !== -1) {
    return `가장 오래 걸리는 단계는 ${maxIndex + 1}단계: "${recipeSteps[maxIndex]}" (총 ${maxTime}분)`;
  } else {
    return "소요시간 정보가 없습니다.";
  }
}

// 마트가야할거같네요
// 귀찮은데
// 아 귀찮다
// export function getStepTimes() 이거 하나만 추가하고갈게요

export function getStepTimes() {
  return recipeSteps.map((step, index) => {
    const match = step.match(/\(소요시간\s*(\d+)분\)/);
    return match ? `${index + 1}단계: ${match[1]}분` : `${index + 1}단계: 소요시간 정보가 없습니다.`;
  });
}

// 피아노학원이라서곧있으면영어학원도가야되서

