const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const start = getRandomNumber(1, 100)
  const step = getRandomNumber(1, 10)
  const length = getRandomNumber(5, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = generateProgression(start, step, length)
  const correctAnswer = progression[hiddenIndex]

  const progressionWithHidden = progression.map((num, index) => {
    return index === hiddenIndex ? '..' : String(num)
  })

  return {
    question: progressionWithHidden.join(' '),
    correctAnswer,
  }
}

export default {
  description: 'What number is missing in the progression?',
  generateRound,
}