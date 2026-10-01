function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Your Name"));

const square = (num) => num * num;

console.log(square(5));

function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}

console.log(calculator(4, 6));