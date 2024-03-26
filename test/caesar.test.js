const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", ()=>{
  it('Should return "wklqnixo"', () => {
    const actual = caesar("thinkful", 3);
    const expected = 'wklqnixo';
    expect(actual).to.equal(expected);
  });
  
  it('Should return "thinkful"', () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  });
  
  it('It ignores capital letters', () => {
    const actual = caesar("THINKFUL", -3);
    const expected = 'qefkhcri';
    expect(actual).to.equal(expected);
  });
  
  it('When encoding, it handles shifts that go past the end of the alphabet', () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = 'bpqa qa i amkzmb umaaiom!';
    expect(actual).to.equal(expected);
  });

  it('It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding', () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = 'this is a secret message!';
    expect(actual).to.equal(expected);
  });
  
  it('It returns false if the shift value is not present', () => {
    const actual = caesar("thinkful");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it('It returns false if the shift value is greater than 25', () => {
    const actual = caesar("thinkful", 99);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it('It returns false if the shift value is less than -25', () => {
    const actual = caesar("thinkful", -26);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
});
