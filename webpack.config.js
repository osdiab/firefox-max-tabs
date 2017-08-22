const path = require("path");

module.exports = {
    entry: [
        "core-js",
        "./src/content/index.ts",
    ],

    output: {
        filename: "content.js",
        path: path.resolve(__dirname, "__build"),
    },

    resolve: {
        extensions: ['.js', '.ts', '.json'],
        alias: {
            content: path.join(__dirname, "src", "content"),
        },
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
        ],
    },

}
