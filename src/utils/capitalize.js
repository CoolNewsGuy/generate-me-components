function capitalize(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1);

  return word;
}

export default capitalize;
