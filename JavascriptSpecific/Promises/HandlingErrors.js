//Exercise: Write a function that fetches data from a fake API URL using fetch() and handles both network errors and non-200 HTTP statuses gracefully, logging different messages for each type of error.
function FetchDataFromApi(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching the data from the api");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data recieved from the api ", data);
    })
    .catch((error) => {
      if (error instanceof TypeError) {
        console.log("Network error:", error.message);
      } else {
        console.log("Error fetching data:", error.message);
      }
    });
}

FetchDataFromApi("https://jsonplaceholder.typicode.com/posts/1");
