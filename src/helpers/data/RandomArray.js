function shuffleArray(array) {
  let i = array.length - 1;
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < 5; i++) {
    const j = Math.floor(Math.random() * (array.length));
    const temp = array[i];
    // eslint-disable-next-line no-param-reassign
    array[i] = array[j];
    // eslint-disable-next-line no-param-reassign
    array[j] = temp;
    // This temporarily stores the array so the function can be repeated with each click.
  }
  return array;
}

export default shuffleArray;
