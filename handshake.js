function countHandshakes(peopleCount) {
  let totalHandshakes = 0;

  for (let i = 1; i <= peopleCount; i++) {
    totalHandshakes += i - 1;
  }

  return totalHandshakes;
}

const numberOfPeople = 10;
countHandshakes(numberOfPeople);  //45
