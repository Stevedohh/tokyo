import webpack from "webpack";

export default {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            })
        );

        // Пример добавления дополнительных правил
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    i18n: {
        locales: ['en', 'ru', 'uk', 'es'],
        defaultLocale: 'ru',
        localeDetection: false,
    },
    env: {
        CUSTOM_VAR: 'my-custom-value',
    },
};
