// Mock functions to simulate fetching data from an API
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching user details...");
      resolve({ userId: userId, username: "john_doe" });
    }, 1000); // Simulates a network delay
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching posts for user:", userId);
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 1500);
  });
}

function fetchFriends(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching friends list for user:", userId);
      resolve(["Alice", "Bob", "Charlie"]);
    }, 1500);
  });
}

// Function to fetch all necessary data and compile the user profile
function createUserProfile(userId) {
  return fetchUser(userId)
    .then((userData) => {
      // Fetch posts and friends concurrently after we have user data
      return Promise.all([
        fetchPosts(userData.userId),
        fetchFriends(userData.userId),
      ]).then((results) => {
        return {
          // Compile all data into a single object
          username: userData.username,
          posts: results[0],
          friends: results[1],
        };
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Usage
createUserProfile(1).then((profile) => {
  console.log("User Profile:", profile);
});
