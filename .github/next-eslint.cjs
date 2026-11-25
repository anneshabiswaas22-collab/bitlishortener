const { createRequire } = require("node:module");

const requireWeb = createRequire(require.resolve("../apps/web/package.json"));

module.exports = {
  root: true,
  extends: ["plugin:@next/next/recommended"],
  parser: requireWeb.resolve("next/dist/compiled/babel/eslint-parser"),
  parserOptions: {
    requireConfigFile: false,
    sourceType: "module",
    babelOptions: { presets: [requireWeb.resolve("next/babel")] },
  },
  settings: { next: { rootDir: "apps/web" } },
};
