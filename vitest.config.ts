import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "jsdom",
        coverage: {
            enabled: true,
            include: ["src"],
            exclude: ["index.ts"],
            reporter: ["html"],
        },
    },
});
