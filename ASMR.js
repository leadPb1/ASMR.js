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
  "1. 무를 1.5cm 두께로 반달썰기한다. (소요시간 1분)",
  "2. 대파와 고추를 어슷썰기한다. (소요시간 2분)",
  "3. 간장, 고춧가루, 설탕 및 양념장 재료들을 섞어 양념장을 만든다. (소요시간 4분)",
  "4. 고등어를 깨끗이 헹군다. (소요시간 6분)",
  "5. 헹군 고등어를 반으로 자른다. (소요시간 2분)",
  "6. 냄비에 무를 깐 후 반 자른 고등어를 얹는다. (소요시간 5분)",
  "7. 대파와 고추를 냄비에 얹은 고등어에 올린다. (소요시간 1분)",
  "8. 양념장을 냄비에 붓고 뚜껑을 열고 끓인다. (소요시간 10분)",
  "9. 거품이 지어 끓어오르면 불을 줄이고 뚜껑을 닫는다. (소요시간 3분)",
  "10. 재료가 골고루 익을 때까지 기다리면서 끓인다. (소요시간 9분)",
  "11. 재료가 골고루 익으면 꺼내서 맛있게 먹는다. (소요시간 10분)"
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
// 배고파졌음 간고등어 먹으러감 ㅅㄱ
