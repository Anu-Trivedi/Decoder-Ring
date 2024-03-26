// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

let letters = "abcdefghijklmnopqrstuvwxyz";

const encodeSubstitution = (input, alphabet) => {
  let encodedMessage = '';
  input = input.toLowerCase();
  
  for(let i=0; i<input.length; i++){
    if(input[i] === ' ')
      encodedMessage+= ' '
    else
      encodedMessage += alphabet[letters.indexOf(input[i])]
  }
  return encodedMessage;
}

//decode
const decodeSubstitution = (input, alphabet) => {
  let decodedMessage = '';
  input = input.toLowerCase();

  for(let i=0; i<input.length; i++){
    if(input[i] === ' ')
      decodedMessage += ' '
    else
      decodedMessage += letters[alphabet.indexOf(input[i])]
  }
  return decodedMessage;
}

const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {
    let message = '';
    //Checks for unique characters in alphabet. Set stores unique values.
    const checkForUnique = new Set(alphabet);

    if(!alphabet || alphabet.length != 26 || checkForUnique.size != 26)
      return false;

    if (encode){
      message = encodeSubstitution(input, alphabet);
    }
    else{
      message = decodeSubstitution(input, alphabet)
    }
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
