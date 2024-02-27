function hemantAsyncFunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
        resolve("Hi there!")
        }, 3000);
    });
    return p;
}

async function main() {
    console.log("initial");
    let value = await hemantAsyncFunction();
    console.log("hi there1");
    console.log(value);
    console.log("hi there2");
}

console.log("hi there 4")

main();

 console.log("after main");