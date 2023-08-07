//Kodecamp Work

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
function FirstLetterinCaps(name) {
  let ress = name.split(" ");
  let res = ress.map((x) => {
    let y = x.split("");
    y[0] = y[0].toUpperCase();
    let c = y.join("");
    return c;
  });
  console.log(res.join(" "));
}

//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
function pickLongestWord(name) {
  name = name.split(" ");
  let res = name.map((x) => {
    return x.length;
  });
  let maxres = Math.max.apply(Math, res);
  return name.find((x) => {
    if (x.length == maxres) {
      console.log(x);
      return x;
    }
  });
}

//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
function PrimeCheck(n) {
  n == 1 && false;

  n == 2 && true;

  if (n % 1 === 0 && n % 2 != 0 && n % 3 != 0) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

//Write a JavaScript function that accepts an argument and returns the type
function ArgType(type) {
  return typeof type;
}

//Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
function secondMinMax(arr) {
  let RemoveMax = Math.max.apply(Math, arr);
  let RemoveMin = Math.min.apply(Math, arr);
  let maxIndex = arr.indexOf(RemoveMax);
  let minIndex = arr.indexOf(RemoveMin);
  arr.splice(maxIndex, 1);
  arr.splice(minIndex, 1);
  console.log(
    `Second Largest ${Math.max.apply(
      Math,
      arr
    )} - SecondLowest ${Math.min.apply(Math, arr)}`
  );
  return `Second Largest ${RemoveMax} - SecondLowest ${RemoveMin}`;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
secondMinMax(arr);
