const { default: expect } = require('expect');
const { sum, substract, multiply, divide } = require('../calculator');

const calculator = require('../calculator');

test('adds a + b', () => {
    //
    expect(sum(5,5)).toBe(10);
})

test('substracts a - b', () => {
   //
   expect(substract(10,5)).toBe(5);
})

test('multiplies a * b', () => {
    //
    expect(multiply(10,5)).toBe(50);
})

test('divides a / b', () => {
    // Consider decimals
    expect(divide(10,5)).toBe(2);
})

test('Raises to power a ^ b', () => {
    //
})

