// ------------PROBLEM 1-----------------------------------------------------------------
/* Using control structures, do the following:

   a. display in the console the numbers from 1 to 20

   b. display in the console the odd numbers from 1 to 20
*/

// Solution P1:

function showNumbersFrom1To20() {
  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
}

function showOddNumbersFrom1To20() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 1 && i != 1) {
      console.log(`${i} is odd`);
    }
  }
}

console.log("Numbers from 1 to 20:");
showNumbersFrom1To20();
console.log("\n");
console.log("Odd numbers from 1 to 20:");
showOddNumbersFrom1To20();
console.log("\n");

// -------------PROBLEM 2----------------------------------------------------------------
/*2.   For list = [2, 3, 5, 7, 5, 3];

   a. compute the sum of the elements of an array and display it in the console

   b. compute the maximum of the elements of an array and display it in the console

   c. compute how many times a certain element appears in an array
*/

// SOLUTION P2:

let list = [2, 3, 5, 7, 5, 3];

function displaySumOfTheArray(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("The array: ", list);
console.log("Sum of the array:", displaySumOfTheArray(list));

function displayTheMaximumElement(arr) {
  let tmp = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (tmp < arr[i + 1]) {
      tmp = arr[i + 1];
    }
  }
  return tmp;
}

console.log(
  "The maximum element in the array: ",
  displayTheMaximumElement(list)
);

function displayTheNumberOfTimesACertainNumberRepeatsInTheArray(number, arr) {
  let tmp = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (number === arr[i]) {
      tmp = tmp + 1;
    }
  }
  console.log(`Number ${number} repedeat in the array ${tmp} times`);
}

displayTheNumberOfTimesACertainNumberRepeatsInTheArray(3, list);
console.log("\n");

// -----------P2 EXTRA--------------------------------------------------------------------
function displayHowManyTimesEveryNumberRepeatedInTheArray(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let tmp = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        tmp = tmp + 1;
        if (tmp > 1) {
          arr.splice(j, 1);
        }
      }
    }
    if (tmp === 1) {
      console.log(`Number ${arr[i]} repetead one time in the array`);
    } else {
      console.log(`Numarul ${arr[i]} repetead ${tmp} times in the array`);
    }
  }
}

let copyList = Array.from(list);

console.log("(EXTRA) How many times every number repeats in the array: ");
displayHowManyTimesEveryNumberRepeatedInTheArray(copyList);
console.log("\n");

// ----------PROBLEM 3--------------------------------------------------------------------
/*3.  Write a program to print Fibonacci series of the first 50 terms:
0 1 1 2 3 5 8 13 24 .....
*/

//SOLUTION P3:

function showFibonacciList(number) {
  let arr = [0, 1];
  for (let i = 2; i <= number - 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(
  "First 50 terms from the Fibbonacci series:",
  showFibonacciList(50)
);
console.log("\n");

// -----------P3 RECURSIVE----------------------------------------------------------------

function showFibonacciListRecursive(number) {
  if (number === 1) return 0;
  if (number === 2) return 1;
  return (
    showFibonacciListRecursive(number - 1) +
    showFibonacciListRecursive(number - 2)
  );
}

console.log(
  "(EXTRA) 20th number from the Fibbonacci series (RECURSIVE):",
  showFibonacciListRecursive(20)
);
console.log("\n");

// -------------PROBLEM 4----------------------------------------------------------------

/*4. Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.

For numbers which are multiples of both three and five print “FizzBuzz”.
*/

// SOULUTION P4:

function showFizzBuzz(number) {
  let list = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list[i] = "FizzBuzz";
    } else if (i % 3 === 0) {
      list[i] = "Fizz";
    } else if (i % 5 === 0) {
      list[i] = "Buzz";
    } else {
      list[i] = i;
    }
  }
  // Remove the first element of the array -> arr.shift() (this function returns the removed element)
  list.shift();
  return list;
}

console.log("Fizz Buzz list: ", showFizzBuzz(50));
console.log("\n");

// -------------PROBLEM 5------------------------------------------------------------------

// i)

function displayRectanglePattern(numberOfRows, numberOfColums) {
  let storePattern = "";
  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfColums; j++) {
      storePattern += "*";
    }
    storePattern += "\n";
  }
  return storePattern;
}

console.log("Bonus exercises:");
console.log("\n");

console.log(displayRectanglePattern(4, 10));

// ii)

function displayLeftTrianglePattern(numberOfRowsAndColums) {
  let storePattern = "";
  for (let i = 0; i < numberOfRowsAndColums; i++) {
    for (let j = 0; j <= i; j++) {
      storePattern += "*";
    }
    storePattern += "\n";
  }
  return storePattern;
}

console.log(displayLeftTrianglePattern(5));

// iii)

function displayRightTrianglePattern(numberOfRowsAndColums) {
  let storePattern = "";
  for (let i = 1; i < numberOfRowsAndColums + 1; i++) {
    for (let j = 0; j < numberOfRowsAndColums - i; j++) {
      storePattern += " ";
    }
    for (let k = numberOfRowsAndColums - i; k < numberOfRowsAndColums; k++) {
      storePattern += "*";
    }
    storePattern += "\n";
  }
  return storePattern;
}

console.log(displayRightTrianglePattern(5));

// iv)

function dispayPyramidStarPattern(numberOfRowsAndColums) {
  let storePattern = "";
  for (let i = 1; i < numberOfRowsAndColums + 1; i++) {
    //Printing spaces before stars
    for (let j = 1; j <= numberOfRowsAndColums - i; j++) {
      storePattern += " ";
    }
    //Printing stars
    for (let k = 0; k < 2 * i - 1; k++) {
      storePattern += "*";
    }
    // This for is additional for printing the next blank spaces after stars
    for (let l = 1; l <= numberOfRowsAndColums - i; l++) {
      storePattern += " ";
    }
    storePattern += "\n";
  }
  return storePattern;
}

console.log(dispayPyramidStarPattern(5));

// v)

function displayPyramidNumberPattern(numberOfRowsAndColums) {
  let storePattern = "";
  for (let i = 1; i < numberOfRowsAndColums + 1; i++) {
    //Printing spaces
    for (let j = 1; j <= numberOfRowsAndColums - i; j++) {
      storePattern += " ";
    }
    //Printing the number of the column
    for (let k = 0; k < 2 * i - 1; k++) {
      storePattern += i;
    }
    //Additional -> printing blank spaces after the number of the column
    for (let l = 1; l <= numberOfRowsAndColums - i; l++) {
      storePattern += " ";
    }
    storePattern += "\n";
  }
  return storePattern;
}

console.log(displayPyramidNumberPattern(5));

// vi)

function displayPyramidNumberPattern2(numberOfRowsAndColums) {
  let storePattern = "";
  for (let i = 1; i < numberOfRowsAndColums + 1; i++) {
    for (let j = 1; j <= numberOfRowsAndColums - i; j++) {
      storePattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      let x = i - k + 1;
      if (x > 0) {
        storePattern += Math.abs(x);
      } else {
        storePattern += Math.abs(x) + 2;
      }
    }
    for (let l = 1; l <= numberOfRowsAndColums - i; l++) {
      storePattern += " ";
    }
    storePattern += "\n";
  }
  return storePattern;
}

console.log(displayPyramidNumberPattern2(5));
