const eqArrays = (array1, array2) => {

  if (array1.length !== array2.length) {

    return false;

  }

  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {

      return false;

    }

  }

  return true;

};

const sumItems = array => {

  while (!eqArrays(array, array.flat())) {
    array = array.flat();
  }
  return (array.length === 0) ? 0 : array[0] + sumItems(array.slice(1));

};

module.exports = sumItems;