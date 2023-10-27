function reverseWordsInSentence(sentence) {
    // Split the sentence into words using space as the delimiter
    let words = sentence.split(' ');
  
    // Define a function to reverse a word
    function reverseWord(word) {
      let reversed = '';
      for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
      }
      return reversed;
    }
  
    // Reverse each word in the array
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
  
    // Join the reversed words back into a sentence
    let reversedSentence = words.join(' ');
  
    return reversedSentence;
  }

  let inputSentence = "This is a sunny day";
  let reversedResult = reverseWordsInSentence(inputSentence);
  console.log(reversedResult);
  