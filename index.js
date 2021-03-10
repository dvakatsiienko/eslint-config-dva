module.exports = {
    root:   true,
    parser: '@typescript-eslint/parser',
    env:    {
        es2021:                true,
        browser:               true,
        node:                  true,
        'shared-node-browser': true,
    },
    globals: {
        __ENV__:  'readonly',
        __DEV__:  'readonly',
        __TEST__: 'readonly',
        __PROD__: 'readonly',
    },
    plugins: [ 'react', 'react-hooks' ],
    extends: [
        'eslint:recommended',
        'airbnb',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    settings: {
        'import/internal-regex': '^@/',
    },
    rules: {
        // ? TypeScript-ESLint
        '@typescript-eslint/explicit-module-boundary-types': 0,

        // ? import
        'import/prefer-default-export': 0,
        'import/no-unresolved':         0,
        'import/extensions':            0,
        'import/order':                 [
            2,
            {
                groups: [
                    'builtin',
                    'external',
                    [ 'internal', 'index', 'sibling', 'parent' ],
                ],
            },
        ],

        // ? React: core
        'react/destructuring-assignment':      0,
        'react/function-component-definition': [
            2,
            {
                namedComponents:   'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/prefer-stateless-function':     2,
        'react/prop-types':                    0,
        'react/react-in-jsx-scope':            0,
        'react/no-array-index-key':            0,
        'react/no-unescaped-entities':         0,
        'react/no-typos':                      1,
        'react/void-dom-elements-no-children': 1,

        // ? React: JSX
        'react/jsx-curly-spacing': [
            1,
            'always',
            { spacing: { objectLiterals: 'never' } },
        ],
        'react/jsx-equals-spacing': [ 1, 'always' ],
        'react/jsx-indent':         [
            1,
            4,
            { checkAttributes: true, indentLogicalExpressions: true },
        ],
        'react/jsx-filename-extension':      [ 2, { extensions: [ '.js', '.tsx' ] }],
        'react/jsx-indent-props':            [ 1, 4 ],
        'react/jsx-no-useless-fragment':     2,
        'react/jsx-props-no-spreading':      0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-sort-props':              [
            1,
            {
                shorthandFirst: true,
                callbacksLast:  true,
            },
        ],

        // ? React: hooks
        'react-hooks/rules-of-hooks': 2,

        // ? React: JSX-a11y
        'jsx-a11y/accessible-emoji':  0,
        'jsx-a11y/img-redundant-alt': 0,
        'jsx-a11y/anchor-is-valid':   0,

        // ? ESLint: possible errors
        'no-console':                  0,
        'no-template-curly-in-string': 0,
        'no-unreachable':              2,

        // ? ESLint: best practices
        'array-callback-return': 1,
        'consistent-return':     0,
        'default-case':          2,
        'default-case-last':     2,
        // 'default-param-last':    1,
        'no-alert':              0,
        'no-eq-null':            2,
        'no-param-reassign':     0,
        'no-void':               0,
        radix:                   [ 1, 'as-needed' ],
        'wrap-iife':             1,

        // ? ESLint: variables
        'no-delete-var':         1,
        'no-restricted-globals': 0,
        'no-use-before-define':  0,

        // ? ESLint: stylistic issues
        'array-bracket-spacing': [
            2,
            'always',
            {
                objectsInArrays: false,
                arraysInArrays:  false,
            },
        ],
        'comma-dangle': [
            2,
            {
                imports:   'never',
                exports:   'never',
                arrays:    'always-multiline',
                objects:   'always-multiline',
                functions: 'always-multiline',
            },
        ],
        'computed-property-spacing': [ 2, 'always' ],
        'func-style':                [ 2, 'declaration', { allowArrowFunctions: true }],
        indent:                      [ 1, 4, { SwitchCase: 1 }],
        'jsx-quotes':                [ 2, 'prefer-single' ],
        'key-spacing':               [
            2,
            { beforeColon: false, afterColon: true, align: 'value' },
        ],
        'max-len': [
            1,
            {
                tabWidth:               4,
                code:                   100,
                ignoreComments:         true,
                ignoreUrls:             true,
                ignoreStrings:          true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-plusplus':          0,
        'no-restricted-syntax': [
            2,
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-underscore-dangle': 0,
        'object-curly-spacing': [ 2, 'always' ],
        quotes:                 [ 2, 'single' ],

        // ? ESLint: ECMAScript 6
        'arrow-body-style': 0,
        'arrow-parens':     [ 2, 'as-needed' ],
        'prefer-const':     1,
    },
};
