// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum =0;
  min = max = arr[0];
  arr.forEach(element => {
    sum += element;
    if (min >= element ) {min = element};
    if (max <= element ) {max = element};
  });
  avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let f = func(arrOfArr[i]);
    if (f > max) {
      max = f;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, d;
  min = max = d = arr[0];
  arr.forEach(element => {
    if (min >= element ) {min = element};
    if (max <= element ) {max = element};
  });
 }
return Math.abs(max - min);
}
}
