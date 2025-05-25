// andongSaltedMackerel.js
// ASMR은 의도하진 않았는데 하필 ASMR이 딱ㅎ

export const seasonings = [
  "간장 4큰술",
  "물 1컵",
  "고춧가루 1.5큰술",
  "맛술 2.3큰술",
  "설탕 1큰술",
  "물엿 1.5큰술",
  "후추 반 작은술",
  "통깨 반의 반 작은술",
  "생강술 0.7큰술"
];

export const ingredients = [
  "고등어 1마리",
  "무 반의 반개",
  "대파 1단",
  "청양고추 1~2개",
  "홍고추 1개"
];

export const recipeSteps = [
  "1. 무를 1.5cm 두께로 반달썰기합니다. 얇으면 무가 흐물흐물해지기 때문에 적당한 크기여야 합니다. (소요시간 1분)",
  "2. 대파와 고추를 어슷썰기합니다. 대파와 고추도 얇으면 흐물흐물해지기 때문에 적당한 크기여야 합니다. (소요시간 2분)",
  "3. 간장, 고춧가루, 설탕 및 양념장 재료들을 섞어 양념장을 만듭니다. 양념장 재료는 취향에 따라 바꾸어도 됩니다. (소요시간 4분)",
  "4. 고등어를 깨끗이 헹굽니다. 깨끗이 행구지 않으면 비린내가 날 수도 있으며, 비브리오 균이 들어올 수도 있습니다. (소요시간 6분)",
  "5. 헹군 고등어를 반으로 자릅니다. (소요시간 2분)",
  "6. 냄비에 무를 깐 후 반 자른 고등어를 얹습니다. 얹는 모양은 예쁘게 하는 것이 보기에 좋습니다. (소요시간 5분)",
  "7. 대파와 고추를 냄비에 얹은 고등어에 올립니다. 이 단계 또한 얹을 때 예쁘게 하는 것이 보기에 좋습니다.(소요시간 1분)",
  "8. 양념장을 냄비에 붓고 뚜껑을 열고 끓입니다. (소요시간 10분)",
  "9. 거품이 지어 끓어오르면 불을 줄이고 뚜껑을 닫습니다. (소요시간 3분)",
  "10. 재료가 골고루 익을 때까지 기다리면서 끓입니다. 골고루 익지 않으면 양념장이 퍼지지 않을 수 있습니다.(소요시간 9분)",
  "11. 재료가 골고루 익으면 꺼내서 맛있게 먹습니다."
];

export function printSeasonings() {
  console.log("양념장 재료 리스트: ");
  seasonings.forEach(sauce => console.log("- " + sauce));
}

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
  console.log("양념장 재료 리스트: ");
  seasonings.forEach(sauce => console.log("- " + sauce));
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
