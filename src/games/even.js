const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const isEven = number => number % 2 === 0

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return {
    question: String(number),
    correctAnswer,
  }
}

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
}
