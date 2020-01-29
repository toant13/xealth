const OFF = 0;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: [],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  rules: {
    'max-len': [2, 150, 4]
  }
};
