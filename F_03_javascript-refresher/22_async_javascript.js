console.log("Start");

setTimeout(() => {
    console.log("This runs later.");
}, 1000);

console.log("End");

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise completed!");
    }, 1000);
});

myPromise.then(result => {
    console.log(result);
});

async function runExample() {
    const result = await myPromise;

    console.log(result);
}

runExample();