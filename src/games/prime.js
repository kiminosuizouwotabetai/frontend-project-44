const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }

  return true
}

const generateRound = () => {
  const number = getRandomNumber(2, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return {
    question: String(number),
    correctAnswer,
  }
}

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound,
}