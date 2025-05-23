import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "jsdom",
        coverage: {
            enabled: true,
            exclude: [...configDefaults.coverage.exclude, "*.*", "src/index.ts"],
            reporter: ["html"],
        },
    },
});
