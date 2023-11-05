import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "dist/index.js",
    output: {
        file: "dist/index.umd.js",
        format: "umd",
        name: "cbbvJsHelpers",
    },
    plugins: [
        nodeResolve({
            browser: true,
        }),
        commonjs(),
    ],
};
