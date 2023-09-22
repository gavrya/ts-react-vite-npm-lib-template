module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['#src', './src']],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react',
    'import',
    'sonarjs',
    'unicorn',
    'eslint-plugin-tsdoc',
    'prettier',
    'react-refresh',
    '@typescript-eslint',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        'vitest-globals/env': true,
      },
      plugins: ['testing-library'],
      extends: [
        'plugin:vitest-globals/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
        'plugin:vitest/recommended',
      ],
    },
    {
      files: ['**/?(*.)+(stories).[jt]s?(x)'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  rules: {
    // eslint
    curly: 'error',
    'arrow-body-style': ['error', 'always'],
    // plugin: react-refresh
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // plugin: import
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '#src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        warnOnUnassignedImports: false,
      },
    ],
    // plugin: react
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    // plugin: unicorn
    'unicorn/prefer-export-from': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-useless-undefined': 'off',
    // plugin: tsdoc
    'tsdoc/syntax': 'error',
  },
};
