import pluginCypress from 'eslint-plugin-cypress/flat';

export default [
    pluginCypress.configs.recommended,
    {
        files: ['cypress/**/*.js'],
        rules: {
            'no-unused-vars': 'warn',
        },
    },
];
