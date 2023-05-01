const {sum, allUpper} = require('../index')
const expect = require('chai').expect

describe('SUM', () => {

    it('calculate sum with positive numbers', () => {
        expect(sum(5, 7)).to.equal(12)
    })


    it('calculate sum with negative numbers', () => {
        expect(sum(-5, -7)).to.equal(-12)
    });

});


describe('ALL UPPER', () => {

    it('input all lower cases', () => {
        expect(allUpper(['a', 'bc'])).eql(['A', 'BC']);
    })


    it('input all upper cases', () => {
        expect(allUpper(['A', 'BC'])).eql(['A', 'BC'])
    })

});
