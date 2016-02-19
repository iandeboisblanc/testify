var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
    });
  });
});

describe('the todo.util methods', function() {
  describe('trimTodoName', function () {
    it('should trim whitespace off input', function () {
      //test here
    });
  });
  describe('isValidTodoName', function () {
    it('should return a boolean', function () {
      var result = todo.util.isValidTodoName('  Get Groceries ');
      expect(result).to.be.a('boolean');
    });
    it('should return false for todo names without 2 characters', function () {
      var result = todo.util.isValidTodoName(' a  ');
      result.should.equal(false);
    });
  });
  describe('getUniqueId', function () {
    it('should return an id value', function () {
      //test here
    })
  })
});


// (function() {
//   var lastId = 1;

//   // Valid todo names must contain at least 2 non-space characters
//   var validTodoRe = /[^\s]{2,}/;
//   var whiteSpaceRe = /^\s+|\s+$/g;

//   todo.util = {
//     trimTodoName: function(name) {
//       return name.replace(whiteSpaceRe, '');
//     },
//     isValidTodoName: function(name) {
//       return validTodoRe.test(name);
//     },
//     getUniqueId: function() {
//       return lastId++;
//     }
//   };
// }());