function longestSentence(text) {
  let sentences = text.match(/\w[^!?.]*?[.!?]/g);
  let longest = sentences.reduce((longest, sentence) => {
    if (wordsInSentence(sentence) > wordsInSentence(longest)) {
      longest = sentence;
      return longest;
    } else {
      return longest;
    }
  });
  console.log(longest)
  console.log(`The longest sentence has ${wordsInSentence(longest)} words.`)
}

function wordsInSentence(sentence) {
  return sentence.split(' ').length;
}