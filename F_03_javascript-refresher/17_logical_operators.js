let isLoggedIn = true;
let isStudent = true;

console.log(isLoggedIn && isStudent);

console.log(isLoggedIn || false);

console.log(!isLoggedIn);

let username = "";

let displayName = username || "Guest";

console.log(displayName);