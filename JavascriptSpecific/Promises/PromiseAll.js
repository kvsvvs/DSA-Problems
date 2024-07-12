//Exercise: Write a function that takes an array of promises and returns a promise that resolves with an array of results if all promises resolve, or logs the error if any promise rejects.
function handleMultiplePromises(promisesArray) {
  return Promise.all(promisesArray)
    .then((results) => {
      console.log("All promises resolved successfully:", results);
      return results;
    })
    .catch((error) => {
      console.error("A promise failed to resolve:", error);
    });
}

const promise1 = Promise.resolve(42);
const promise2 = Promise.resolve("Hello");
const promise3 = Promise.resolve({ success: true });

handleMultiplePromises([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
