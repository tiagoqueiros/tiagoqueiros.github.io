module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
  },
  extends: ["@pixelmatters/eslint-config-pixelmatters"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "arrow-parens": ["error", "always"],
  },
  overrides: [
    {
      files: ["*.ts", "*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["*.vue"],
      extends: [
        "plugin:vue/recommended",
        "plugin:nuxt/recommended",
        "@nuxtjs/eslint-config-typescript",
      ],
      rules: {
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "space-before-function-paren": [
          "error",
          {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
          },
        ],
        "comma-dangle": ["error", "always-multiline"],
        "vue/html-quotes": ["error", "double"],
        "vue/no-v-html": "off",
        "vue/html-indent": ["error", 2],
        "vue/html-self-closing": [
          "error",
          {
            html: { normal: "never", void: "always" },
          },
        ],
        "vue/component-name-in-template-casing": [
          "error",
          "PascalCase",
          {
            ignores: ["i18n"],
          },
        ],
        "vue/one-component-per-file": "off",
      },
    },
  ],
};
