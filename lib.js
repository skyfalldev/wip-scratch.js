const phin = require("phin");
const equals = require("assert").strictEqual;
const path = require("path");

class User {
  constructor(username) {
    equals(
      typeof username,
      "string",
      new TypeError("Expected username to be a string")
    );
    try {
    } catch {
      throw new Error("Could not get user!");
    }
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
  getUser(username = "mahad200907") {}
}

module.exports = Scratcher;
