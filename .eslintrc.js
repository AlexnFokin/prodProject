module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    "eslint:recommended",
    'standard-with-typescript',
    'plugin:storybook/recommended',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "project": ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', "i18next"],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "i18next/no-literal-string": ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }],
    "max-len": ['error', {
      "ignoreComments": true,
      code: 100
    }],
    "@typescript-eslint/naming-convention": "warn"
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    }
  ]
}
