class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log("Hi, I am " + this.name);
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is studying JavaScript.");
    }
}

const student = new Student("Alex");

student.introduce();
student.study();