#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = (number) => number % 2 === 0;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswers = 0;
const rounds = 3;

while (correctAnswers < rounds) {
  const question = getRandomNumber(1, 100);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
}

console.log(`Congratulations, ${name}!`);