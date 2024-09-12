const config = (api) => {
    api.cache.invalidate(() => process.env.NODE_ENV);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    modules: false,
                },
            ],
            [
                "@babel/preset-typescript",
                {
                    rewriteImportExtensions: true,
                },
            ],
        ],
        parserOpts: { strictMode: true },
    };
};

module.exports = config;
