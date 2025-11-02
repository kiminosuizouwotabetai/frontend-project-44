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
      '@stylistic/comma-dangle': 'off',
      '@stylistic/eol-last': ['error', 'always'],
    },
  },
]
