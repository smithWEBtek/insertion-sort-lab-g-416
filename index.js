function findMinAndRemove(array) {
  let min = array[0];
  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array) {
  let newMin;
  let result = []
  while (array.length != 0) {
    newMin = findMinAndRemove(array)
    result.push(newMin)
  }
  return result;
}
