'use strict';

const {RuleTester} = require('eslint');
const rule = require('../../rules/no-http-url');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://axiom.com';"
    }
  ],
  invalid: [
    {
      code: "var test = 'http://axiom.com';",
      output: "var test = 'http://axiom.com';",
      errors: [
        {
          message: 'Recommended "http://axiom.com" switch to HTTPS',
        }
      ]
    },
    {
      code: "<img src='http://axiom.com' />",
      output: "<img src='http://axiom.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      errors: [
        {
          message: 'Recommended "http://axiom.com" switch to HTTPS',
        }
      ]
    }
  ]
})

