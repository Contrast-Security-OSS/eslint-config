// @ts-check
'use strict';

/**
 * Base rule set to be expanded upon.
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': ['error', 'never'],
  'arrow-body-style': ['error', 'as-needed'],
  'arrow-spacing': 'error',
  'block-spacing': 'error',
  'brace-style': 'error',
  'comma-dangle': [
    'error',
    {
      arrays: 'only-multiline',
      exports: 'only-multiline',
      functions: 'only-multiline',
      imports: 'only-multiline',
      objects: 'only-multiline',
    },
  ],
  'comma-spacing': 'error',
  'comma-style': 'error',
  'computed-property-spacing': ['error', 'never'],
  'default-param-last': 'error',
  'dot-location': ['error', 'property'],
  'eol-last': 'error',
  'func-call-spacing': 'error',
  'function-call-argument-newline': ['error', 'consistent'],
  'indent': [
    'error',
    2,
    {
      // Ternary functions are formatted inconsistently.
      ignoredNodes: [
        'ConditionalExpression > CallExpression *',
        'ConditionalExpression > NewExpression *',
      ],
      offsetTernaryExpressions: true,
      SwitchCase: 1,
    },
  ],
  'key-spacing': 'error',
  'keyword-spacing': 'error',
  'linebreak-style': ['error', 'unix'],
  'new-parens': 'error',
  'newline-per-chained-call': 'error',
  'no-floating-decimal': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': 'error',
  'no-sequences': 'error',
  'no-trailing-spaces': 'error',
  'no-unused-vars': ['error', { args: 'none', varsIgnorePattern: '^_' }],
  'no-var': 'error',
  'no-whitespace-before-property': 'error',
  'object-curly-newline': ['error', { consistent: true, multiline: true }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'object-shorthand': ['error', 'always'],
  'prefer-const': 'error',
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: { array: false, object: false },
      VariableDeclarator: { array: false, object: true },
    },
  ],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'quote-props': ['error', 'as-needed', { unnecessary: false }],
  'quotes': ['error', 'single', { avoidEscape: true }],
  'rest-spread-spacing': 'error',
  'semi': 'error',
  'semi-spacing': 'error',
  'semi-style': 'error',
  'space-before-blocks': 'error',
  'space-in-parens': 'error',
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'strict': ['error', 'safe'],
  'switch-colon-spacing': 'error',
  'template-curly-spacing': 'error',
  'template-tag-spacing': ['error', 'never'],
  'wrap-iife': ['error', 'inside'],

  'node/no-deprecated-api': [
    'warn',
    {
      ignoreModuleItems: ['domain', 'process.binding'],
    },
  ],
};
