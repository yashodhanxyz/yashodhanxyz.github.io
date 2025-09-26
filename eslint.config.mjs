import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const typescriptStrict = tseslint.configs.strictTypeChecked.map((config) => ({
  ...config,
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ...(config.languageOptions ?? {}),
    parser: tseslint.parser,
    parserOptions: {
      ...(config.languageOptions?.parserOptions ?? {}),
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
}));

const typescriptStylistic = tseslint.configs.stylisticTypeChecked.map((config) => ({
  ...config,
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ...(config.languageOptions ?? {}),
    parser: tseslint.parser,
    parserOptions: {
      ...(config.languageOptions?.parserOptions ?? {}),
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
}));

const astroRecommended = astro.configs['flat/recommended'].map((config) => ({
  ...config,
  files: ['**/*.astro'],
  languageOptions: {
    ...(config.languageOptions ?? {}),
    parser: astroParser,
    parserOptions: {
      ...(config.languageOptions?.parserOptions ?? {}),
      parser: tseslint.parser,
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
      extraFileExtensions: ['.astro'],
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    ...(config.plugins ?? {}),
    'jsx-a11y': jsxA11y,
  },
  rules: {
    ...(config.rules ?? {}),
    ...jsxA11y.configs.strict.rules,
  },
}));

export default [
  {
    ignores: ['dist', '.astro', 'legacy_static', 'node_modules'],
  },
  ...astroRecommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
    },
  },
  js.configs.recommended,
  ...typescriptStrict,
  ...typescriptStylistic,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
];
