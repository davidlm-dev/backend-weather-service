import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import tsParser from "@typescript-eslint/parser"
import prettier from "eslint-config-prettier"
import pluginPrettier from "eslint-plugin-prettier"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser, // <- CORREGIDO, no puede ser string
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 2022,
        sourceType: "module"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      ts: tseslint,
      prettier: pluginPrettier
    },
    extends: [
      ...tseslint.configs.recommended,
      prettier // Desactiva reglas que choquen con Prettier
    ],
    rules: {
      "prettier/prettier": "error",               // fuerza a que el código siga Prettier
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error"
    }
  }
])
