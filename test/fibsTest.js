const { assert } = require("chai");
const Fibo = require('../index');
const Perfect = require('../perfectSquare')



// assert.isTrue(isFibannoci(2), true)

describe('Test first for perfectSquare', () => {
    const square = new Perfect();

    it('Check if 1 is a perfectsquare', () => {
        assert.isTrue(square.isPerfectSquare(1),'true')
    });
    it('Check if 4 is a perfectsquare', () => {
        assert.isTrue(square.isPerfectSquare(4),'true')
    });

    it('Check if 121 is a perfectsquare', () => {
        assert.isTrue(square.isPerfectSquare(121),'true')
    });
    })

describe('Test first for Fibannocci', () => {
    const f = new Fibo();

    it('Check if -1 is a Fibannoci number', () => {
        assert.isTrue(f.isFibonacci(-1),'true')        
    });
    it('Check if 4 is a Fibannoci', () => {
        assert.isTrue(f.isFibonacci(4),'true')
    });
     
    it('Check if 49 is a Fibannoci', () => {
        assert.isTrue(f.isFibonacci(49),'true')
    });
     
    })

    //this was contributed by David Odie and Kato Agaba.