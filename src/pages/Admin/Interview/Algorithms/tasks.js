// Владилен Tasks https://www.youtube.com/watch?v=x-EZy6gu_38&t=1146s

// 1) TASK
function isUnique(string) {
  // for (let i = 0; i < string.length; i++) {
  //   const char = string[i];
  //   if (string.lastIndexOf(char) !== i) {
  //     return false;
  //   }
  // }
  // return true;
  // 2 способ
  // const set = new Set();
  // for (let i = 0; i < string.length; i++) {
  //   const char = string[i];
  //   if (set.has(char)) {
  //     return false;
  //   }
  //   set.add(char);
  // }
  // return true;
  // 3 способ

  return new Set(string).size === string.length;
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abcadef')); // -> false

// 2 TASK
function flatten(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

// 3 TASK
function removeDupes(str) {
  // 1
  // let result = '';
  // for (let i = 0; i < str.length; i++) {
  //   const element = str[i];
  //   if (result.indexOf(element) === -1) {
  //     result += element;
  //   }
  // }
  // return result;

  // 2
  // const res = [];
  // const map = {};
  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i];

  //   if (!map[char]) {
  //     map[char] = true;
  //     res.push(char);
  //   }
  // }
  // return res.join('');
  // 3
  return Array.from(new Set(str)).join('');
}

console.log(removeDupes('abcd')); // -> 'abcd'
console.log(removeDupes('aabbccdd')); // -> 'abcd'
console.log(removeDupes('abcddbca')); // -> 'abcd'
console.log(removeDupes('abababcdcdcd')); // -> 'abcd'

// 4 TASK
function highestFrequency(array) {
  const map = {};
  let maxFreq = 0;
  let maxFreqStr = array[0];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (map[current]) {
      map[current]++;
    } else {
      map[current] = 1;
    }

    if (map[current] > maxFreq) {
      maxFreq = map[current];
      maxFreqStr = current;
    }
  }
  return maxFreqStr;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
console.log(highestFrequency(['abc', 'def'])); // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])); // -> ghi

console.log(typeof false);

function containsTinkoff(str) {
  const targetChars = ['T', 'I', 'N', 'K', 'O', 'F'];
  let countF = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toUpperCase();

    if (targetChars.includes(char)) {
      if (char === 'F') {
        countF++;
        if (countF > 2) {
          return 'no';
        }
      }
    }
  }

  return targetChars.every(char => str.toUpperCase().includes(char)) ? 'yes' : 'no';
}

console.log(containsTinkoff('Tinkoff')); // yes
console.log(containsTinkoff('TINKOFF')); // yes
console.log(containsTinkoff('Some text with Tinkoff')); // yes
console.log(containsTinkoff('ADSAKLDJADLAHSIDAOLD')); // no
console.log(containsTinkoff('F F T O K I N')); // no

document.onclick = function (event) {
  alert(event.type);
};

document.body.dispatchEvent(new CustomEvent('click'));

console.log(0 == undefined);

const str1 = 'абв';
const str2 = 'abc';

const result = str1.localeCompare(str2);

console.log(result);

const rbg12312 = [1, 2, 3, 4, 5, 6, 7].toSorted((a, b) => {
  return b - a;
});

console.log(rbg12312);

// const text = 'apple banana apple orange';
// const wordCount = {};

// let increment = 1;

// let currentWord = '';

// for (let i = 0; i < text.length; i++) {
//   const char = text[i];

//   if (char === ' ') {
//     // Если символ пробел, увеличиваем счетчик текущего слова
//     if (currentWord in wordCount) {
//       wordCount[currentWord] += increment;
//     }
//     // Инициализируем счетчик для нового слова
//     increment = 1;
//     currentWord = '';
//   } else {
//     // Увеличиваем счетчик символа
//     increment++;

//     currentWord += char;
//   }
// }

// console.log('Результат:');

// for (const word in wordCount) {
//   console.log(word, '-', wordCount[word]);
// }

let s = 'apple banana orange apple';

// Алгоритм подсчета кол-ва вхождений каждого слова
let wordCounts = {};
let wordStart = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === ' ' || i === s.length - 1) {
    let word = s.substring(wordStart, i + 1).trim();
    if (word) {
      if (word in wordCounts) {
        wordCounts[word] += 1;
      } else {
        wordCounts[word] = 1;
      }
    }
    wordStart = i + 1;
  }
}

// Вывод результата на экран
for (let word in wordCounts) {
  console.log(`${word} - ${wordCounts[word]}`);
}
