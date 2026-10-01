const student = {
    name: "Marclean",
    age: 20,
    course: "BSIS",

    introduce() {
        console.log(`Hi, I'm ${this.name}.`);
    }
};

student.hobby = "Gaming";

console.log(student);
student.introduce();