/* eslint-disable */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    env: { browser: true, es2022: true, node: true },
    plugins: ['@typescript-eslint','react','react-hooks','import','simple-import-sort','prettier'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier'
    ],
    settings: { react: { version: 'detect' } },
    rules: {
        'prettier/prettier': 'warn',
        'react/react-in-jsx-scope': 'off',
        'import/order': 'off',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'import/no-unresolved': 'off'
    }
};
