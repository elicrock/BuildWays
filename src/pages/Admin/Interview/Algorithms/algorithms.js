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

function filterInputList(inputList) {
  const filteredList = inputList.filter(function (item) {
    return Number.isInteger(item) && item >= 0;
  });

  return filteredList;
}

const inputList = [1, '23', 3, '34324', 5, -2, 'orange'];
const result = filterInputList(inputList);

console.log(result);

function accum(str) {
  if (str.length === 0) {
    return '';
  }

  const chars = str.split('');

  const result = chars.map(function (char, index) {
    return char.toUpperCase() + char.toLowerCase().repeat(index);
  });

  return result.join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));

const products = [
  { name: 'Футболка', price: 20, quantity: 2 },
  { name: 'Джинсы', price: 50, quantity: 1 },
  { name: 'Носки', price: 5, quantity: 10 },
  { name: 'Штаны', price: 30, quantity: 1 },
];

function calculateRevenue(products) {
  const totalRevenue = products.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  return totalRevenue;
}

const revenue = calculateRevenue(products);
console.log('Сумма выручки:', revenue);
