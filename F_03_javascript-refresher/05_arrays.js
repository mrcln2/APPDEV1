let hobbies = ["Gaming", "Music", "Coding"];

hobbies.push("Movies");

console.log(hobbies);

hobbies.shift();

console.log(hobbies);

for (const hobby of hobbies) {
    console.log(hobby);
}

const messages = hobbies.map(hobby => `I like ${hobby}`);

console.log(messages);