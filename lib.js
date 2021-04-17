const phin = require("phin").unpromisified;
const equals = require("assert").strictEqual;
const path = require("path");

class User {
  constructor(username, session) {
    equals(
      typeof username,
      "string",
      new TypeError("Expected username to be a string")
    );
    const res = phin(
      {
        method: "GET",
        url: "https://api.scratch.mit.edu/users/" + username,
      },
      (err, res) => {
        if (err) {
          throw new Error("Could not get user!");
        }

        if (res.statusCode == 200) {
          for (const prop in res.body) {
            this[prop] = res.body[prop];
          }
        } else {
          throw new Error("Could not get user!");
        }
      }
    );
  }
}
class Scratcher {
  constructor(username, password) {
    // here we check to see if the parameters have both been set
    equals(
      typeof username,
      "string",
      new TypeError("Expected username to be a string")
    );
    equals(
      typeof password,
      "string",
      new TypeError("Expected password to be a string")
    );
  }
}

module.exports = Scratcher;
