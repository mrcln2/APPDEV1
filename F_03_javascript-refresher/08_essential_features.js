const hobbies = ["Gaming", "Music", "Coding"];

const messages = hobbies.map(hobby => "I enjoy " + hobby);

console.log(messages);

const student = {
    name: "Alex",
    course: "BSIT"
};

const { name, course } = student;

console.log(name);
console.log(course);

const moreHobbies = [...hobbies, "Movies"];

console.log(moreHobbies);