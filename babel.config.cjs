/* eslint-disable no-undef */
const config = (api) => {
    api.cache.invalidate(() => process.env.NODE_ENV);

    return {
        presets: [
            // "@babel/preset-typescript",
            [
                "@babel/preset-env",
                {
                    useBuiltIns: "usage",
                    corejs: { version: "3.22", proposals: true },
                },
            ],
            [
                "minify",
                {
                    builtIns: false
                }
            ]
        ],
    };
};

module.exports = config;
