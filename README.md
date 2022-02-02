# eslint config

Base eslint configuration for Contrast Node projects.

## Installation and Usage

```sh
npm install --save-dev @contrast/eslint-config
```

Add the following to your `.eslintrc.json`:

```json
{
  "extends": "@contrast"
}
```

For compatibility with prettier, add the following to `package.json`:

```jsonc
{
  // ...
  "prettier": {
    "singleQuote": true,
    "trailingComma": "all"
  }
}
```
