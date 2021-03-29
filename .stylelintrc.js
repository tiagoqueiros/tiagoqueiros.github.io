module.exports = {
  extends: "@pixelmatters/stylelint-config-pixelmatters",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends", "tailwind", "screen", "include", "mixin"],
      },
    ],
  },
};
