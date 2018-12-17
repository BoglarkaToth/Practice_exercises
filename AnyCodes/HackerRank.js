'use strict';

let testMatrix = [
  [3, 4, 5, 9],
  [4, 3, 7, 9],
  [5, 8, 3, 9],
  [9, 9, 9, 3]
]
let resultAa = 0;
function matrixA() {
  let diag1 = 0;
  let diag2 = 0;
  for (let row = 0; row < testMatrix.length; row++) {
    for (let col = 0; col < testMatrix[row].length; col++) {
      if (testMatrix[row][col] !== testMatrix[col][row]) {
      } else if (row === col) {
        diag1 += testMatrix[row][col];
      } else if (row + col === testMatrix.length - 1) {
        diag2 += testMatrix[row][col];
      }
    }
  }
  // console.log(diag1);
  // console.log(diag2);
  resultAa = diag1 - diag2
  // console.log(resultAa);
  return resultAa;
}
function absN() {
  let abs = 0;
  if (resultAa < 0) {
    abs = resultAa * -1;
  }
  // console.log(abs);
  return abs;
}
matrixA();
// let resultAa = matrixA();   // ha a vltozó az első függvényen belül van, akkor újra ki kell mentenem
absN();

// ----------------------------------------------------------------------

let numberP = [1, 4, 0, -5, 0, -7, 3, 6, -2];
let allN = 0;

let positivP = 0;
let zeroP = 0;
let negativP = 0;

let rateP = 0;
let rateZ = 0;
let rateN = 0;

function countN() {
  for (let i = 0; i < numberP.length; i++) {
    if (numberP[i]) {
      allN++;
    } if (numberP[i] > 0) {
      positivP++;
    } if (numberP[i] === 0) {
      zeroP++;
    } if (numberP[i] < 0) {
      negativP++;
    }
  }
  rateP = allN / positivP;
  rateZ = allN / zeroP;
  rateN = allN / negativP;

  // console.log(allN);
  // console.log(positivP);
  // console.log(zeroP);
  // console.log(negativP);
  // console.log(rateP);
  // console.log(rateZ);
  // console.log(rateN);
}

countN(numberP);

// ----------------------------------------------------------------------

let thingie = '#';
let space = ' ';
let row = 6;

function stairReverse() {
  for (let i = row - 1; i >= 0; i--) {
    let line = '';                        // le kell nulláuni
    for (let j = 0; j <= i; j++) {
      line += space;
    }
    for (let j = row - 1; j >= i; j--) {
      line += thingie;
    }
    // console.log(line);
  }
}

stairReverse();

// ----------------------------------------------------------------------

let minMaxArr = [1, 2, 5, 7, 9];

function minCounter() {
  // let minArr = [];
  let min = 0;
  for (let i = 1; i < minMaxArr.length; i++) {
    // minArr.push(minMaxArr[i - 1]);
    min += minMaxArr[i - 1];
  }
  // console.log(minArr);
  // console.log(min);
}

function maxCounter() {
  // let maxArr = []
  let max = 0;
  for (let i = 1; i < minMaxArr.length; i++) {
    // maxArr.push(minMaxArr[i]);
    max += minMaxArr[i];
  }
  // console.log(maxArr);
  // console.log(max);
}

minCounter();
maxCounter()

// ----------------------------------------------------------------------

let numR = 30;
let arrR = [];
let biggestN;
let counter = 0;

function fullArr() {
  for (let i = 0; i <= numR; i++) {
    arrR.push(Math.floor(Math.random() * numR));
  }
  // console.log(arrR);
}

function highest() {
  arrR.sort(function (a, b) { return a - b });
  biggestN = arrR[arrR.length - 1];

  for (let i = 0; i < arrR.length; i++) {
    if (biggestN === arrR[i]) {
      counter++;
    }
  }

  // console.log(biggestN);
  // console.log(counter);
}

fullArr()
highest();

// ----------------------------------------------------------------------

let time = '10:43:56AM'.slice(0, -2).split(':');
// console.log(time);

time.splice(0, 1, (parseInt(time[0]) + 12).toString());
// console.log(time);

let aa = time.join(':');
// console.log(aa);

// ----------------------------------------------------------------------

let budget = 9;
let keyboard = [2, 5, 4, 7, 3, 6];
let usb = [7, 4, 5, 2, 6, 3];

function BestPrice(budget, keyboard, usb) {
  let results = {};
  //objectet csinalunk az arraybo;
  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < usb.length; j++) {
      let sumString = keyboard[i] + " + " + usb[j];
      let sum = keyboard[i] + usb[j];
      results[sumString] = budget - sum;
    }
  }
  //kitoroljuk a 0nal kisebbeket, es beallitjuk a legkisebb differenciat
  let smallest = budget;
  for (let key in results) {
    if (results[key] < 0) {
      delete results[key];
    } else if (results[key] <= smallest) {
      smallest = results[key];
    }
  }
  //kitoroljuk ami nagyobb a legkisebb differencianal
  for (let key in results) {
    if (results[key] !== smallest) {
      delete results[key];
    }
  }
  //kitoroljuk az ismetlodeseket
  for (let key in results) {
    let num1 = key.split(" ")[0];
    for (let key2 in results) {
      let num2 = key2.split(" ")[2];
      if (num1 === num2) {
        delete results[key];
      }
    }
  }
  return results;
}

let smallest = BestPrice(budget, keyboard, usb);
// console.log(smallest)

// ----------------------------------------------------------------------
// matrix

let budgetA = 10;
let keyboardA = [1, 3, 2, 5, 9, 12];
let usbA = [2, 4, 8, 5, 11, 3];

function price() {

  let stuffA = [];
  for (let k = 0; k < keyboardA.length; k++) {
    for (let u = 0; u < usbA.length; u++) {
      stuffA.push([keyboardA[k], usbA[u], keyboardA[k] + usbA[u]]);
    }
  }

  let filtered = stuffA.filter(value => value[2] < budgetA);

  // console.log(filtered);
  // console.log(stuffA);
}

price();

// ----------------------------------------------------------------------

let cats = ['a', 'b', 'c'];
let cinci = 'E'
let randomPosition = [];

function winCat() {
  while (cats.length > 0) {
    let randomIndex = Math.floor(Math.random() * cats.length)
    randomPosition.push(cats[randomIndex])
    cats.splice(randomIndex, 1)
  }
  randomPosition.splice(Math.floor(Math.random() * (randomPosition.length + 1)), 0, cinci);
  // console.log(randomPosition);
}

winCat();

// ----------------------------------------------------------------------

let bigArray = [8, 9, 1, 2, 1, 1, 2, 5, 5, 7, 6, 5, 8, 10, 5, 9, 6, 6];
let chunkedArray = [];
let long;

function subArray() {
  bigArray.sort((a, b) => a - b);
  console.log(bigArray);

  let current;
  for (let i = 0; i < bigArray.length; i++) {
    if (i === 0 || current < bigArray[i]) {
      current = bigArray[i];

      let arr = [];
      for (let j = i; j < bigArray.length; j++) {
        if (bigArray[j] - current <= 1) {
          arr.push(bigArray[j]);
        }
      }
      // ?s
      // if (arr.length !== 1) {
      //   chunkedArray.push(arr);
      // }
      // ha nem akarom az egyforma számú arr kiírni:
      if (arr.indexOf(current + 1) !== -1) {
        chunkedArray.push(arr);
      }

      // missing...
      for (let k = 0; k < chunkedArray.length; k++) {
        long = Math.max(chunkedArrayy)
      }

    }
  }
  console.log(chunkedArray);
  console.log(long);
}

subArray();