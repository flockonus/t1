module.exports = {
    "env": {
        "browser": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        }
    },
    plugins: ['react', 'react-hooks'],
    "rules": {
        "indent": ["error", 2],
    }
};
