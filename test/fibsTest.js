const { assert } = require("chai");

//assert.isTrue(isFibannoci(2), true)

const isPerfectSquare= require('../index');
const isFibonacci = require('../index');


describe('Test first for perfectSquare', () => {


    it('Check if 11 is a perfectsquare', () => {
         assert.isTrue(isPerfectSquare(11),'true')
         
        });
        it('Check if 4 is a perfectsquare', () => {
            assert.isTrue(isPerfectSquare(4),'true')
        });
    })

    describe('Test first for Fibannocci', () => {


        it('Check if -1 is a Fibannoci number', () => {
             assert.isTrue(isFibonacci(11),'true')
             
            });
            it('Check if 4 is a Fibannoci', () => {
                assert.isTrue(isFibonacci(4),'true')
            });
        })
    