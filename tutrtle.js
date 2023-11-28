function daysToReachTop(hillHeight, climbDistance, slipDistance) {
  let days = 0;
  let currentHeight = 0;

  while (currentHeight < hillHeight) {
    days++;
    currentHeight += climbDistance;

    if (currentHeight >= hillHeight) {
      break;
    }

    currentHeight -= slipDistance;
  }

  return days;
}

const hillHeight = 100;
const climbDistance = 50;
const slipDistance = 30;

daysToReachTop(hillHeight, climbDistance, slipDistance); // 4
