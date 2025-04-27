import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      all: false,
      include: [
        "src/**/*.ts",
        "src/*.ts",
      ],
      exclude: [
        "src/**/index.ts",
        "src/index.ts",
        "test/**/index.spec.ts",
        "test/index.spec.ts",
        "**/node_modules/**",
        "**/dist/**"
      ],
    },
  },
});
