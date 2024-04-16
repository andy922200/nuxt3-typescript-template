module.exports = {
  ignoreFiles: ['node_modules/*', 'src/assets/**', 'build/**'],
  extends: ['stylelint-config-standard', 'stylelint-config-html/vue'],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'selector-max-compound-selectors': 6,
    'selector-class-pattern': null,
    'function-name-case': null,
    'selector-id-pattern': null,
    'selector-pseudo-element-no-unknown': null,
    'keyframes-name-pattern': null,
    'custom-property-no-missing-var-function': null,
    'color-function-notation': 'legacy',
    'selector-no-qualifying-type': null,
    'alpha-value-notation': 'number',
    'no-descending-specificity': null,
  },
}
