import readlineSync from 'readline-sync'

const ROUNDS = 3

const runGame = (gameData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameData.description)

  let correctAnswers = 0

  while (correctAnswers < ROUNDS) {
    const { question, correctAnswer } = gameData.generateRound()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!')
      correctAnswers += 1
    }
    else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      )
      console.log(`Let's try again, ${name}!`)
      process.exit()
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGame
