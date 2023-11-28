function removeDuplicates(inputString) {
  const wordsArray = inputString.split(",");
  const uniqueWordsSet = new Set(wordsArray);
  const uniqueWordsArray = Array.from(uniqueWordsSet);
  const resultString = uniqueWordsArray.join(",");
  return resultString;
}

const inputString = "кошка,собака,лошадь,корова,кошка,собака,кот,собака";
removeDuplicates(inputString);
