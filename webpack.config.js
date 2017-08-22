const path = require("path");

module.exports = {
    entry: [
        "./src/content/index.ts",
    ],

    output: {
        filename: "content.js",
        path: path.resolve(__dirname, "__build"),
    },

    resolve: {
        extensions: ['.ts', '.json'],
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
