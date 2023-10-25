/* eslint-disable no-undef */
const config = (api) => {
    api.cache.invalidate(() => process.env.NODE_ENV);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: { esmodules: true },
                    modules: false,
                    useBuiltIns: "usage",
                    corejs: { version: "3.33" },
                },
            ],
            ["@babel/preset-typescript"],
        ],
    };
};

module.exports = config;
