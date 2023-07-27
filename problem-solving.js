// problem :-1 =>

const  reverseString=(inputString)=> {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}


const inputStr = "Hello, World!";
const reversedStr = reverseString(inputStr);
console.log(reversedStr); // Output: "!dlroW ,olleH"




//  Problem :-2=>

const sumOfPositiveNumbers=(numbers)=> {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

const numbersArray = [2, -5, 8, -3, 10, 7];
const positiveSum = sumOfPositiveNumbers(numbersArray);
console.log(positiveSum); // Output: 27 (2 + 8 + 10 + 7)



// problem :- 3=>


const findMostFrequentElement=(arr)=> {
  const frequencyCounter = {};
  arr.forEach((element) => {
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  });

  let mostFrequentElement;
  let maxFrequency = 0;

  for (const element in frequencyCounter) {
    if (frequencyCounter[element] > maxFrequency) {
      maxFrequency = frequencyCounter[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}


const myArray = [2, 3, 2, 5, 8, 2, 3, 3, 9];
const mostFrequent = findMostFrequentElement(myArray);
console.log(mostFrequent); // Output: 2


// problem :-4=>

const findTwoSum=(arr, target)=> {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}


const sortedArray = [-3, 1, 3, 6, 10];
const targetValue = 9;
const result = findTwoSum(sortedArray, targetValue);
console.log(result); // Output: [1, 4] (indexes of 1 and 6)




// problem :-5=>



const calculator=(num1, operator, num2)=> {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator.";
  }
}


console.log(calculator(5, '+', 3)); // Output: 8
console.log(calculator(10, '-', 4)); // Output: 6
console.log(calculator(6, '*', 7)); // Output: 42
console.log(calculator(15, '/', 3)); // Output: 5
console.log(calculator(5, '/', 0)); // Output: "Error: Division by zero is not allowed."
console.log(calculator(2, '^', 3)); // Output: "Error: Invalid operator."


// problem :-6=>

const generateRandomPassword=(length)=> {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}



const passwordLength = 12; // Change this value to adjust the length of the password
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);


// problem :-7=>


const romanToInt=(romanNumeral)=> {
  const romanNumeralsMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanNumeralsMap[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}


console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("XXI")); // Output: 21
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("XLII")); // Output: 42
console.log(romanToInt("MMXXI")); // Output: 2021



// problem :-8=>


const findSecondSmallest=(arr)=> {
  if (arr.length < 2) {
    return "Array should contain at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "There is no second smallest element in the array.";
  }

  return secondSmallest;
}


const myArray2 = [5, 2, 9, 1, 7, 3];
console.log(findSecondSmallest(myArray2)); // Output: 2
