'use strict';
/*
var assert = require("assert");
describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
		assert.equal(2, [1,2,3].indexOf(3));
		assert.equal(-1, [1,2,3].indexOf(0));
	});
});

//========ASYNCHRONOUS CODE=============

//done - колбек, який викликається після завершення асинхронного коду

function User(name) {
	this.save = function(forError) {
		//forError(true);//failing
		forError(false);//passing
	}
}

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) throw err;
        done();
      });
    });
  });
});

//  або

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });
  });
});


//WORKING WITH PROMISES

var tobi = 1,
	loki = 2,
	jane = 3;

function DB() {
	this.heroes = [];
	this.clear = function() {
		this.heroes = [];
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				this.heroes = [];
				resolve(this.heroes);
			}, 1000);		
		});
	};
	this.save = function(arr) {
		console.log(arr);
		this.heroes = this.heroes.concat(arr);
		// return new Promise(function(resolve, reject){
		// 	setTimeout(function() {
		// 		this.heroes.concat(arr);
		// 		resolve(this.heroes);	
		// 	}, 1000);
		// });
	};
	this.find = function(obj) {
		if (obj.type === 'User') {
			console.log(this.heroes);
			return this.heroes; 
			// new Promise(function(resolve, reject) {
			// 	setTimeout(function() {
			// 		resolve(this.heroes);
			// 	}, 2000);
			// });
		};
	};
}

var db = new DB();

var assert = require("assert");

beforeEach(function() {
  return db.clear()
    .then(function() {
      return db.save([tobi, loki, jane]);
    });
});

describe('#find()', function() {
  it('respond with matching records', function() {
    //return db.find({ type: 'User' }).should.eventually.have.length(3);
    assert.equal(3, db.find({ type: 'User' }).length);
  });
});



//Error: Resolution method is overspecified. 
//Specify a callback *or* return a Promise; not both.
const assert = require('assert');

it('should complete this test', function (done) {
  return new Promise(function (resolve) {
    assert.ok(true);
    resolve();
  })
    .then(done);
});


//------------------------------------
//chai-as-promised
//------------------------------------



//================SYNCHRONOUS CODE===================

var should = require('chai').should();

var assert = require("assert");

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});

//ARROW FUNCTIONS

describe('my suite', () => {
  it('my test', () => {
    // should set the timeout of this test to 1000 ms; instead will fail
    // this.timeout(1000);
    setTimeout(function() {

    },1000);
    assert.ok(true);
  });
});


/////////////HOOKS/////////////////

describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});

//DESCRIBING HOOKS

beforeEach(function() {
  // beforeEach hook
});

beforeEach(function namedFun() {
  // beforeEach:namedFun
});

beforeEach('some description', function() {
  // beforeEach:some description
});

//ASYNCHRONOUS HOOKS

describe('Connection', function() {
  var db = new Connection,
    tobi = new User('tobi'),
    loki = new User('loki'),
    jane = new User('jane');

  beforeEach(function(done) {
    db.clear(function(err) {
      if (err) return done(err);
      db.save([tobi, loki, jane], done);
    });
  });

  describe('#find()', function() {
    it('respond with matching records', function(done) {
      db.find({type: 'User'}, function(err, res) {
        if (err) return done(err);
        res.should.have.length(3);
        done();
      });
    });
  });
});

//////////DELAYED ROOT SUITE///////////

// If you need to perform asynchronous operations before any of
// your suites are run, you may delay the root suite. Run mocha
// with the --delay flag. This will attach a special callback
// function, run(), to the global context:

setTimeout(function() {
  // do some setup

  describe('my suite', function() {
    // ...
  });

  run();
}, 5000);

/////////////////////PENDING TESTS//////////////////////////////

//“Pending”–as in “someone should write these test cases eventually”
//–test-cases are simply those without a callback:

describe('Array', function() {
  describe('#indexOf()', function() {
    // pending test below
    it('should return -1 when the value is not present');
  });
});

//EXCLUSIVE TESTS

var assert = require("assert");
describe('Array', function() {
  describe('block1', function() {//буде ігноруватись
   it("all ignored", function() {
	assert.equal(1, (function(){return 1})());
   });
  });
  describe.only('block2', function() {
    it.only('test 1', function() {
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it('ignored test', function() {//буде ігноруватись
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it.only('test 2', function() {
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

//INCLUSIVE TESTS
//Best practice: Use .skip() instead of commenting tests out.

var assert = require("assert");
describe('Array', function() {
  describe.skip('block1', function() {//буде ігноруватись
   it("all ignored", function() {
	assert.equal(1, (function(){return 1})());
   });
  });
  describe('block2', function() {
    it('test 1', function() {
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it.skip('ignored test', function() {//буде ігноруватись
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it('test 2', function() {
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

//To skip multiple tests in this manner, use this.skip() in a “before” hook:

before(function() {
  if (// check test environment ) {
    // setup code
  } else {
    this.skip();
  }
});

//=============DYNAMICALLY GENERATING TESTS==============

var assert = require('chai').assert;

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [1, 2, 3],    expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});

//TEST DURATION////////////////

describe('something slow', function() {
  this.slow(10000);

  it('should take long enough for me to go make a sandwich', function() {
    // ...
  });
});

		//TIMEOUTS

//SUITE-LEVEL

describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 250);
  });
})

//TEST-LEVEL
//Test-specific timeouts may also be applied, or the use
//of this.timeout(0) to disable timeouts all together:

it('should take less than 500ms', function(done){
  this.timeout(500);
  setTimeout(done, 300);
});

//HOOK-LEVEL
//use this.timeout(0) to disable the timeout for a hook.

describe('a suite of tests', function() {
  beforeEach(function(done) {
    this.timeout(3000); // A very long environment setup.
    setTimeout(done, 2500);
  });
});

///////////
The Expect / Should API covers the BDD assertion styles.
The Assert API covers the TDD assertion style.
///////////

//////////////chai example


var should = require('chai').should(), 
	foo = "blabla";
describe("suit1", function(){
	it("test1", function() {
		foo.should.be.a('string');		
	});
});

*/


