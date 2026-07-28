import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([".astro/", ".vscode/", "dist/", "node_modules/", "public/"]),
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
    },
  },
]);
