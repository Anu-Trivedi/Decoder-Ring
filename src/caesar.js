// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    //shift constraints
    if(!shift || shift===0 || shift<-25 || shift>25)
      return false;
    
    //if encode is false, then decode the message with negative shift value
    if(!encode)
      shift = shift * -1;
    
    let result = "";
    for(let i=0; i<input.length; i++){
      //converts all letters to lowercase, ignoring capitals
      const letter = input[i].toLowerCase();
      
      //checks for alphabets
      if(letters.includes(letter)){
          const letterIndex = letters.indexOf(letter);
          let shiftedIndex = letterIndex + shift;

          //string(letters) index starts at 0, so comparing indices with 25
          if (shiftedIndex > 25)
          {
            shiftedIndex += -26;
          }
          if (shiftedIndex < 0 && shiftedIndex > -25)
          {
            shiftedIndex += 26;
          }
          //encoded/decoded letter after applying shift
          const shiftedLetter = letters[shiftedIndex];
          result += shiftedLetter;
      }
      //non-alphabetic letters
      else{
          result += letter;
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
