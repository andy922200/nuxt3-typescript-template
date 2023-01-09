module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: [],
    rules: {
        indent: ['error', 4],
        quotes: [2, 'single'],
        semi: [2, 'never'],
        'no-use-before-define': [2, 'nofunc'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'key-spacing': [1, {
            beforeColon: false,
            afterColon: true
        }],
        'import/first': [0],
        'object-property-newline': [2, {
            allowAllPropertiesOnSameLine: true
        }]
    },
    overrides: [
        {
            files: [
                '**/pages/**/*.{js,ts,vue}',
                '**/layouts/**/*.{js,ts,vue}',
                '**/app.{js,ts,vue}',
                '**/error.{js,ts,vue}'
            ],
            rules: {
                'vue/multi-word-component-names': 'off'
            }
        }
    ]
}
