// eslint.config.js
// @ts-nocheck

import playwright from 'eslint-plugin-playwright';
import airbnbBase from 'eslint-config-airbnb-base';

export default [
    {
        ...playwright.configs['flat/recommended'],
        // ignores: ["__tests__/system.spec.js"],
    },
    {
        rules: {
            ...airbnbBase.rules,
            semi: "error",
            "prefer-const": "error",
            "camelcase": "warn",
            "no-unused-vars": "warn",
            "no-console": "error",
            "func-names": "off",
            "no-plusplus": "off",
            "no-process-exit": "off",
            "class-methods-use-this": "off",
            "no-restricted-globals": "warn",
            "playwright/no-conditional-expect": "on"
        }
    },
];