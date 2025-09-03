// eslint.config.js
import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import prettier from "eslint-config-prettier"
import pluginPrettier from "eslint-plugin-prettier"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      js,
      prettier: pluginPrettier
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier // desactiva reglas que choquen con Prettier
    ],
    rules: {
      "prettier/prettier": "error" // fuerza a que el código siga Prettier
    }
  }
])
