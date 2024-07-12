//Exercise: Given a promise that resolves with a number, write a chain of two promises that first multiplies the number by itself and then adds 5 to the result.
function ProcessNumber(inputPromise) {
  return inputPromise
    .then((number) => number * number)
    .then((squarred) => squarred + 5);
}

const newPromise = Promise.resolve(3);

ProcessNumber(newPromise).then((result) => console.log(result));
