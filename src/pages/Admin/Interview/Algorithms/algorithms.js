// Ulbi https://www.youtube.com/watch?v=NErrGZ64OdE&t=1131s

// 1 Линейный поиск
let countLinear = 0; // O(n)  n - количество элементов
function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    countLinear += 1;
    if (array[i] === item) {
      return i;
    }
  }

  return null;
}

const arrayLinearSearch = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(linearSearch(arrayLinearSearch, 6));
console.log(countLinear);

// 2 Бинарный поиск
let countBinary = 0;
function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    countBinary += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

const arraybinarySearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(binarySearch(arraybinarySearch, 14));
console.log(countBinary);
