function getArrayParams(...arr) {
  let sum, avg;
  let max = -Infinity;
  let min = Infinity;

  max = Math.max(...arr);
  min = Math.min(...arr);
  sum = arr.reduce((acc, value) => acc + value, 0);
  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((acc, value) => acc + value, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }
  if (arr.length === 0) {
    return 0;
  }
  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = arr[i] + sumEvenElement;
    }
    else {
      sumOddElement = arr[i] + sumOddElement;
    }
  }
  let result = sumEvenElement - sumOddElement;
  return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = arr[i] + sumEvenElement;
      countEvenElement += 1;
    }
  }
  if (arr.length === 0) {
    return 0;
  }
  let result = sumEvenElement / countEvenElement;
  return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const INT = func(...arrOfArr[i]);
    if (INT > maxWorkerResult) {
      maxWorkerResult = INT;
    }
  }
  return maxWorkerResult;
}
