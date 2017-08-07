//Test Driven Development:
//TDD for short.
//Testing frameworks:
//    Jasmine.
//    Mocha.
//    Karma.
//    (many others).

//Mocha similar to Jasmine and the basis for similar test 
//suites.

// Example test:
// const assert = require('assert');
// describe('Array', () => {
//     describe('#indexOf()', () =>{
//         it('should return -1 when the value is not present', function(){
//             assert.equal(-1, [1,2,3].indexOf(4));
//         });
//     });
// });


// //Using mocha
// npm init -y
// npm install --save-dev mocha   
// mkdir test
// touch test/test.js

// Could use Chai:
// npm install --save dev chai  

// Behaviour Driven Development (BDD):
// const expect = require('chai').expect;
// let foo = 'bar';
// let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// expect(foo).to.be.a('string');
// expect(foo).to.equal('bar');
// expect(foo).to.have.lengthOf(3);
// expect(beverages)


// Sounds more like a description of the specifications.
// As you change your code condirms that there's no bugs.


//Calculator in TDD with Mocha and Chai///////////////
// Must have:
//     add
//     subtract
//     multiply
//     divide

/////////////////////////////////////////////////
////////Calculator class example//////////////
//////////////////////////////////////////////
const expect = require('chai').expect;
//This brings in the calculator js file
const Calculator = require('../calculator');
let calc = new Calculator();
//Opening function.
describe('Can do arithmetic', () => {
    //Tests for addition of numbers.
    describe('Can add numbers', () =>{
        it('Can add two positive integers', () =>{
           expect(calc.add(1,1)).to.equal(2); 
        })
    //Tests for multiplication of numbers.
    describe('Can multiply numbers', () => {
        it('Can multiply two positive integers', () =>{
            expect(calc.multiply(1,1)).to.equal(1);
        })
    })
    //Tests for division of numbers.
    describe('Can divide numbers', () => {
        it('Can divide two positive integers', () =>{
            expect(calc.divide(10,2)).to.equal(5);
        })
    })
    //Tests for subtraction of numbers.
    describe('Can subtract numbers', () => {
        it('Can subtract two positive integers', () =>{
            expect(calc.subtract(10,5)).to.equal(5);
        })
    })
    //Can add integers to zero
    it('Can add an integer to zero', () => {
        expect(calc.add(1,0)).to.equal(1);
        });
    //Cannot add numbers to a function.
    it("Can not add a number and a function", () => {
        expect(calc.add(1, () => {})).to.equal('1() => {}');
    });
    });
    "Can add numbers asynchronously."
    describe('Can add numbers asynchronously', () => {
        it('Can add two integers asynchrounosly', (done) => {
            calc.addAsync(3, 2, (val) => {
                if (val === 5) {
                done();
            } else {
                done(new Error('nope'));
            }
            });
        });
    })
});
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////





