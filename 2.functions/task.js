function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum;

  for (let i = 0, i < arr.length, i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
    sum = arr.reduce((acc, value) => acc + value, 0);    
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((acc, value) => acc + value, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
let max = -Infinity;
let min = Infinity;
let result = 0;

for (let i = 0; i < arr.length; i++) {
  max = Math.max(max, arr[i]);
  min = Math.min(min, arr[i]);
  result = max - min;
}
return result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = arr[i] + sumEvenElement;
    }
    else {
      sumOddElement = arr[i] + sumOddElement;
    }
    result = sumEvenElement - sumOddElement;
  }
  return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = arr[i] + sumEvenElement;
    }
    else {
      sumOddElement = arr[i] + sumOddElement;
    }
    result = sumEvenElement - sumOddElement;
  }
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
