function rightPlace(word, symbol, checkWord) {
  let result = word.replace('_', symbol);

  if (result === checkWord) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}
rightPlace('Str_ng', 'I', 'Strong');
