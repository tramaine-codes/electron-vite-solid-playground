import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '.chemist',
      'coverage',
      'dist',
      '.husky',
      'lib',
      'node_modules',
      'out',
      'tmp',
      '.vite',
    ],
  },
  {
    extends: [eslint.configs.recommended, ...tseslint.configs.strict],
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': ['warn'],
    },
  }
);
