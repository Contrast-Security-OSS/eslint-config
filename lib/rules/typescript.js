// @ts-check
'use strict';

const { rules: tsPluginRules } = require('@typescript-eslint/eslint-plugin');
const baseRules = require('./base');

/**
 * Base rules to be expanded upon. Also handles TypeScript specific settings
 * which aren't as simple as copying over the normal rule config.
 * @type {import('eslint').Linter.RulesRecord}
 */
const tsBaseRules = {
  // Replace Airbnb 'comma-dangle' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
  // The TypeScript version also adds 3 new options, all of which should be set to the same value as the base config
  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': [
    baseRules['comma-dangle'][0],
    {
      ...baseRules['comma-dangle'][1],
      enums: baseRules['comma-dangle'][1].arrays,
      generics: baseRules['comma-dangle'][1].arrays,
      tuples: baseRules['comma-dangle'][1].arrays,
    },
  ],

  '@typescript-eslint/no-empty-interface': ['warn', { allowSingleExtends: true }],
  '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
  '@typescript-eslint/no-this-alias': ['error', { allowedNames: ['self'] }],
};

/**
 * TypeScript plugin rule overrides for base ESLint rules.
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = Object.entries(baseRules).reduce(
  (rulesRecord, [rule, config]) => {
    if (rule in rulesRecord || !(rule in tsPluginRules)) return rulesRecord;

    // Disable the original and override with the TypeScript plugin rule.
    rulesRecord[rule] = 'off';
    rulesRecord[`@typescript-eslint/${rule}`] = config;

    return rulesRecord;
  },
  tsBaseRules,
);
