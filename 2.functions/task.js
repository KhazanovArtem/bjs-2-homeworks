function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;

}

function differenceMaxMinWorker(...arr) {

  let diff = (Math.max.apply(null, arr)) - (Math.min.apply(null, arr));

  if (arr.length == 0) {
    diff = 0;
  }

  return diff;
}

function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sumOddElement += arr[i];
    } else {
      sumEvenElement += arr[i];
    }
  }

  return (sumEvenElement - sumOddElement);

}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  let avg = sumEvenElement/countEvenElement;

  if (arr.length == 0) {
    avg = 0;
  }

  return (avg);

}

function makeWork (arrOfArr, func) {

let maxWorkerResult = -Infinity;

for (let i = 0; i < arrOfArr.length; i++) {
  let sum = func(...arrOfArr[i]);

  if (sum > maxWorkerResult) {
    maxWorkerResult = sum;
  }
}

return maxWorkerResult;

}
