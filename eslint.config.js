import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    rules: {
      'no-var': 'off', // var 키워드 사용 가능
      'prefer-const': 'warn', // 변수가 재할당 되지 않는다면 let 대신 const 사용
      'no-cond-assign': 'warn', // 조건문에서 변수값 할당식 사용
      'no-redeclare': 1, // 변수 중복 선언
      indent: 'error', // 들여쓰기 검사(기본 4칸, 대괄호로 기본값 변경)
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 0, // 선언된 변수가 사용되지 않아도 오류 표시되지 않음
    },
  },
  {
    ignores: ['.history', 'dist'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    extends: [eslintConfigPrettier],
  },
]);
