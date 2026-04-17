modules.exports = {
  plugins: ['axiom-fe-eslint-plugin'],
  rules: {
    'axiom-fe-eslint-plugin/no-http-url': 'warn',
    'axiom-fe-eslint-plugin/no-js-in-ts-project': 'warn',

    'axiom-fe-eslint-plugin/no-secret-info': 'error',
    'axiom-fe-eslint-plugin/no-broad-semantic-versioning': 'error',
  }
}