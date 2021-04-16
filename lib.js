const phin = require("phin");
const equals = require("assert").strictEqual
const path = require("path")

class User {
  async constructor(username) {
    equals(typeof(username), "string", new TypeError("Expected username to be a string"))
    try {
      const res = await phin({
        "method":"GET",
        "url":"https://api.scratch.mit.edu/users/mahad200907"
      })
     } catch {
       throw new Error("Could not get user!")
     }

class Scratcher {
  constructor(username, password) {
    // here we check to see if the parameters have both been set
    equals(typeof(username), 'string', new TypeError('Expected username to be a string'));
    equals(typeof(password), 'string', new TypeError('Expected password to be a string'));
  }
}

module.exports = Scratcher
