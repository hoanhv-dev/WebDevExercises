import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      "**/node_modules/",
      "**/build/",
      "**/package-lock.json",
      "**/postcss.config.js",
    ],
  },
  ...compat.extends("plugin:prettier/recommended"),
  {
    files: ["src/**/*.ts", "src/**/*.scss", "src/**/*.tsx"],
    plugins: [],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  }
];
