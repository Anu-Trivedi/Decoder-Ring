const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", ()=>{
  it('when encoding, it translates the letters i and j to 42', () => {
    const actual = polybius("thinkful j");
    const expected = '4432423352125413 42';
    expect(actual).to.equal(expected);
  });
  
  it('when decoding, it translates 42 to (i/j)', () => {
    const actual = polybius("4432423352125413", false);
    const expected = 'th(i/j)nkful';
    expect(actual).to.equal(expected);
  });
  
   it('It ignores capital letters', () => {
    const actual = polybius("HELLO WORLD");
    const expected = '3251131343 2543241341';
    expect(actual).to.equal(expected);
  });
  
  it('t maintains spaces in the message, before and after encoding', () => {
    const actual = polybius("hello world");
    const expected = '3251131343 2543241341';
    expect(actual).to.equal(expected);
  });
  
  it('t maintains spaces in the message, before and after decoding', () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = 'hello world';
    expect(actual).to.equal(expected);
  });
  
  
});
