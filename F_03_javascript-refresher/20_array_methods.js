const numbers = [10, 25, 30, 5, 40];

const filtered = numbers.filter(number => number > 20);
console.log(filtered);

const found = numbers.find(number => number > 20);
console.log(found);

const hasLargeNumber = numbers.some(number => number > 35);
console.log(hasLargeNumber);

const allPositive = numbers.every(number => number > 0);
console.log(allPositive);

const sorted = [...numbers].sort((a, b) => b - a);
console.log(sorted);