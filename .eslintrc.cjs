module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:svelte/recommended",
    "plugin:prettier/recommended", // Enables Prettier rules
  ],
  plugins: ["svelte"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte/svelte",
    },
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["node_modules", "dist"],
};
