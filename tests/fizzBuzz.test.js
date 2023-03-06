const { default: expect } = require('expect');
const picomatch = require('picomatch');
const { test } = require('picomatch');
const fizzBuzz = require('../fizzBuzz');

const regex = /FizzBuzz/;

test('test if number is divisible by 5 and 3',() => {
    expect(fizzBuzz(15)).toMatch(regex);
});