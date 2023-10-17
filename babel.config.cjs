/* eslint-disable no-undef */
const config = (api) => {
    api.cache.invalidate(() => process.env.NODE_ENV);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    // TODO: Set correct value for targets.
                    targets: { esmodules: true },
                    useBuiltIns: "usage",
                    corejs: { version: "3.22", proposals: true },
                },
            ],
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
