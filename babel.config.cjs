/* eslint-disable no-undef */
const config = (api) => {
    api.cache.invalidate(() => process.env.NODE_ENV);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: { esmodules: true },
                    useBuiltIns: "usage",
                    corejs: { version: "3.33" },
                },
            ],
            ["@babel/preset-typescript"],
            [
                "minify",
                {
                    builtIns: false,
                },
            ],
        ],
    };
};

module.exports = config;
