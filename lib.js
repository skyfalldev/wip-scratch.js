const phin = require("phin");
const equals = require("assert").strictEqual
const path = require("path")

class Scratcher {
  constructor(username, password) {
    // here we check to see if the parameters have both been set
    equals(typeof(username), 'string', new TypeError('Expected username to be a string'));
    equals(typeof(password), 'string', new TypeError('Expected password to be a string'));
  }
  getProject(id) {
    // TODO: Create a project class
  }
  setBio(bio) {
    // TODO: Set bio
  }
  setWIWO(wiwo) {
    // TODO: Set WIWO
  }
  setPFP(pfp) {
    const pfpType = typeof pfp
    equals(pfpType, "string"||"object", new TypeError("Expected PFP to be a path or Buffer!")
    // TODO: Set the PFP
  }
}

module.exports = Scratcher
