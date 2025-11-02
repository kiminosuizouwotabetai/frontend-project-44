const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomOperator = () => {
  const operators = ['+', '-', '*',]
  return operators[Math.floor(Math.random() * operators.length)]
}

const calculateAnswer = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      return null
  }
}

const generateRound = () => {
  const a = getRandomNumber(1, 100)
  const b = getRandomNumber(1, 100)
  const operator = getRandomOperator()
  const correctAnswer = calculateAnswer(a, b, operator)

  return {
    question: `${a} ${operator} ${b}`,
    correctAnswer,
  }
}

export default {
  description: 'What is the result of the expression?',
  generateRound,
}