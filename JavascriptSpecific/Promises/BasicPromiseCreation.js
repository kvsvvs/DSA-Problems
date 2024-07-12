//Exercise: Write a function that returns a new promise which resolves with the string "Hello, Promises!" after 1 second.
function HelloPromises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello Promises");
    }, 1000);
  });
}

HelloPromises().then((message) => {
  console.log(message);
});
