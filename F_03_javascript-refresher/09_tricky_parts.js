// Equality

console.log(5 == "5");
console.log(5 === "5");

// Reference copy

const original = [1, 2, 3];

const referenceCopy = original;

referenceCopy.push(4);

console.log(original);
console.log(referenceCopy);

// Spread copy

const original2 = [1, 2, 3];

const spreadCopy = [...original2];

spreadCopy.push(4);

console.log(original2);
console.log(spreadCopy);