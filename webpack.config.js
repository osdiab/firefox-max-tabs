const path = require("path");

const sharedConfig = {
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        // If you update aliases, don't forget to also
        // update the path member of tsconfig.json.
        alias: {
            background: path.join(__dirname, "src", "background"),
            common: path.join(__dirname, "src", "common"),
            content: path.join(__dirname, "src", "content"),
        },
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
        ],
    },
}

module.exports = [
    Object.assign({}, sharedConfig, {
        entry: [
            "core-js",
            "./src/content/index.ts",
        ],

        output: {
            filename: "content.js",
            path: path.resolve(__dirname, "__build"),
        },
    }),

    Object.assign({}, sharedConfig, {
        entry: [
            "core-js",
            "./src/background/index.ts",
        ],

        output: {
            filename: "background.js",
            path: path.resolve(__dirname, "__build"),
        },
    }),
];
