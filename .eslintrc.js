module.exports = {
  extends: 'airbnb',
  'rules': {
    'import/no-extraneous-dependencies': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/no-danger': [0],
  },
  globals: {
    graphql: false,
  },
};
