function showMessage(message) {
  console.log(message + " " + this.name);
}

const person = { name: "Kartikeya" };

//call
showMessage.call(person, "Hello");
//apply
showMessage.apply(person, ["Hello"]);
//bind
const newUserMessage = showMessage.bind(person);
newUserMessage("Hello");
