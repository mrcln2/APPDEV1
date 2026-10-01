const age = 20;

const status = age >= 18 ? "Adult" : "Minor";

console.log(status);

const student = {
    name: "Alex"
};

console.log(student.address?.city);

const nickname = null;

console.log(nickname ?? "No nickname");