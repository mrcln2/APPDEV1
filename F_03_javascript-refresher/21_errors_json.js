try {
    throw new Error("Something went wrong.");
} catch (error) {
    console.log(error.message);
}

const student = {
    name: "Alex",
    course: "BSIT"
};

const jsonData = JSON.stringify(student);

console.log(jsonData);

const convertedBack = JSON.parse(jsonData);

console.log(convertedBack);