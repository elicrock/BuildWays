// Функция кеширования
function memoize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

function addMemoize(a, b) {
  console.log('Adding:', a, b);
  return a + b;
}

// Применяем кеширование к функции add
const memoizedAdd = memoize(addMemoize);

// Используем кешированную функцию
console.log(memoizedAdd(1, 2)); // Первый вызов, вычисление и кеширование
console.log(memoizedAdd(1, 2)); // Второй вызов, результат взят из кеша
console.log(memoizedAdd(3, 4)); // Новые аргументы, вычисление и кеширование
console.log(memoizedAdd(3, 4));

//========================================
// Функция каррирования
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Пример функции, которую будем каррировать
function addCurry(a, b, c) {
  return a + b + c;
}

// Применяем каррирование к функции add
const curriedAdd = curry(addCurry);

// Использование каррированной функции
const result = curriedAdd(1)(2)(3); // 6
console.log(result);

//===============================================================
// Функция map
function map(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const mapperValue = callback(array[i], i, array);
    result.push(mapperValue);
  }

  return result;
}

// Пример Map
const arrayMap = [1, 2, 3, 4, 5];
console.log(map(arrayMap, item => item * 2));

//===============================================================
// Функция filter
function filter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// Пример Filter
const arrayfilter = [1, 2, 3, 4, 5];
console.log(filter(arrayfilter, item => item % 2 === 0));

//===============================================================
// Функция Reduce

function reduce(array, callback, initialValue) {
  const hasInitialValue = initialValue !== undefined;
  let accumulator = hasInitialValue ? initialValue : array[0];

  for (let i = hasInitialValue ? 0 : 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

// Пример Reduce
const arrayReduce = [1, 2, 3, 4, 5];
console.log(
  reduce(
    arrayReduce,
    (acc, curr) => {
      return acc + curr;
    },
    0,
  ),
);

//===============================================================
// Функция forEach

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
// Пример
const arrayForEach = [1, 2, 3, 4, 5];
forEach(arrayForEach, item => console.log(item));

// Пример Замыкания
function a() {
  const rbg = 'привет из замыкания';
  function b() {
    console.log(rbg);
  }
  return b;
}

const bFunction = a();
bFunction();
