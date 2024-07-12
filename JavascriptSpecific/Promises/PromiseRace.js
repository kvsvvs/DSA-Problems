// Function to fetch data from JSONPlaceholder API
function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((user) => user)
    .catch((error) => {
      console.error("Error fetching user:", error);
      throw error; // Re-throw to ensure rejection is handled
    });
}

// Function to fetch data from Dog CEO's Dog API
function fetchDogImage() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((image) => image)
    .catch((error) => {
      console.error("Error fetching dog image:", error);
      throw error; // Re-throw to ensure rejection is handled
    });
}

// Using Promise.race to determine the faster of the two promises
function racePromises() {
  const userPromise = fetchUser();
  const dogImagePromise = fetchDogImage();

  return Promise.race([userPromise, dogImagePromise])
    .then((result) => {
      console.log("Faster result:", result);
    })
    .catch((error) => {
      console.error("Error in Promise.race:", error);
    });
}

// Execute the racePromises function
racePromises();
