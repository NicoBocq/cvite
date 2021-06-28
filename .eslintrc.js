module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    'comma-dangle': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      "ignores": []
    }],
    'prettier/prettier': ['error', { 'singleQuote': true, 'endOfLine': 'auto' }],
    'vue/max-attributes-per-line': [2, {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never'
    }],
    'max-len': ['error', {
      'code': 150,
      'tabWidth': 2,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true,
      "ignorePattern": "class"
    }],
  },
}
