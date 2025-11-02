const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const calculateGcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRound = () => {
  const a = getRandomNumber(1, 100)
  const b = getRandomNumber(1, 100)
  const correctAnswer = calculateGcd(a, b)

  return {
    question: `${a} ${b}`,
    correctAnswer,
  }
}

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound,
}
