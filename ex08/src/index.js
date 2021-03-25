const _ = require("lodash");
// change code below
// user nested array tiwh four objects starts here
const users = [
  { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
  // four objects
];

function getUsers() {
  var output = "";
  for (let i = 0; i < users.length; i++) {
    output += `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`;
  }
  console.log(output);
  return output;
}

// getUser function - list of users ends here

// findUser(lastName, gende) function starts here
function findUser(lastName, gender) {
  try {
    // add appropriete code here
  } catch (error) {
    return "Cannot read property 'firstName' of undefined"; // Change this line
    console.log(); // change this line
  }
}
// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
findUser(); // Change this line

module.exports = findUser; 
