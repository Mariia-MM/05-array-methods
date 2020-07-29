// function #1
const getRandomArray = (length, getNumber) => {
  let number = 0;
  let newArr = [];

  for (let i = 0; i < length; i++) {
    number = getNumber(1, 50);
    newArr.push(number);
  }
  return newArr;
};

const getNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  number = Math.floor(Math.random() * (max + 1 - min) + min);

  return number;
};

console.log(getRandomArray(20, getNumber));

//function#2
