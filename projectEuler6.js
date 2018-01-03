
/*The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/


let arr = [];

for (let i = 0; i <= 100; i++) {
  arr.push(i);
}

const SquareOfTheSum = () => {
  let sum = arr.reduce((total, amount) => total + amount);
  return sum *= sum;

}

console.log("The square of the sum of the first 100 natural numbers: " + SquareOfTheSum());

const SumOfTheSquares = () => {
  numSquared = arr.map(num => num * num);

  let sum = numSquared.reduce((total, amount) => total + amount);
  return sum;

}

console.log("The sum of the squares of the first 100 natural numbers: " + SumOfTheSquares());


console.log("Their difference is: " + (SquareOfTheSum() - SumOfTheSquares()));
