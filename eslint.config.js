import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-trailing-spaces': ['error'],
    },
  },
]
