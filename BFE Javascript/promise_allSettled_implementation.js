function allSettled(promises) {
  const transformedPromises = promises.map((promise) => {
    return Promise.resolve(promise)
      .then((value) => ({
        status: "fullfilled",
        value: value,
      }))
      .catch((reason) => ({
        status: "rejected",
        reason: reason,
      }));
  });
  return Promise.all(transformedPromises);
}

const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Error");

const promises = [promise1, promise2];

allSettled(promises);
