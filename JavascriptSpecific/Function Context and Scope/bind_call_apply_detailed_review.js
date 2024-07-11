function login() {
  console.log(`${this.username} is logged in with the role of ${this.role}.`);
}

function User(username, role) {
  this.username = username;
  this.role = role;
}

// Instantiate users with different roles
const admin = new User("Alice", "Admin");
const member = new User("Bob", "Member");

// Directly using the function with call to specify the context
login.call(admin); // Output: Alice is logged in with the role of Admin.
login.call(member); // Output: Bob is logged in with the role of Member.

function updateProfile(name, age) {
  console.log(
    `Updated profile of ${this.username}: Name - ${name}, Age - ${age}`
  );
}

const user = {
  username: "Alice",
};

// Using apply to call updateProfile
updateProfile.apply(user, ["Alice Cooper", 30]);

function sendMessage(message) {
  console.log(`${this.username} says: ${message}`);
}

const user_bind = {
  username: "Alice",
};

// Create a bound function that always uses 'user' as 'this'
const userMessage = sendMessage.bind(user_bind, "Hello!");

// Later in the code, perhaps in a response to a user action
userMessage(); // Output: Alice says: Hello!
