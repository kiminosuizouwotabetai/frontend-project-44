import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    ignores: ['node_modules/**']
  },
  {
    files: ['**/*.js'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/no-trailing-spaces': 'error'
    }
  }
];