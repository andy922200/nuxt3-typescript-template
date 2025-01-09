import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

import withNuxt from './.nuxt/eslint.config.mjs'

const eslintConfig = tsEslint.config(
  /* Global Ignore */
  {
    ignores: ['node_modules', 'dist', 'public', '.nuxt', '.output'],
  },

  /* Global Variable Rules*/
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
  },

  /* Plugins & Configs Recommended Start */
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  ...eslintPluginTailwindcss.configs['flat/recommended'],
  eslintPluginPrettierRecommended,

  {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  /* Plugins & Configs Recommended End */

  /* Custom JavaScript Rules*/
  {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    },
  },

  /* Custom Vue Rules*/
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },

  /* Custom TypeScript Rules */
  {
    files: ['**/*.{cjs,ts,tsx,vue}'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
)

const withNuxtConfig = withNuxt(eslintConfig)

export default withNuxtConfig
