const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

console.log(combined);

const student = {
    name: "Alex"
};

const updatedStudent = {
    ...student,
    course: "BSIS"
};

console.log(updatedStudent);

function addAll(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(addAll(10, 20, 30));