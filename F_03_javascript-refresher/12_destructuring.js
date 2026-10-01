const student = {
    name: "Alex",
    age: 20
};

const { name, age } = student;

console.log(name);
console.log(age);

const colors = ["Red", "Blue"];

const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);

function introduce({ name, age }) {
    console.log(name + " is " + age + " years old.");
}

introduce(student);