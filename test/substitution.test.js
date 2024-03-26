const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", ()=>{
  it('it returns false if the given alphabet isnt exactly 26 characters long', () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it('it correctly translates the given phrase, based on the alphabet given to the function', () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  
  it('it returns false if there are any duplicate characters in the given alphabet', () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibvv");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it('it maintains spaces in the message, before and after encoding', () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  
  it('it maintains spaces in the message, before and after decoding', () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);  
    const expected = "message";
    expect(actual).to.equal(expected);
  });
  
  it("it ignores capital letters.", () => {
    const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev"); 
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  })
  
});
