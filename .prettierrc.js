module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: 'src/**/*.js',
      options: {
        trailingComma: 'all',
      },
    },
  ],
};
