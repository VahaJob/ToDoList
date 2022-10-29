const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./UI/src/main.js",
        app:  "./UI/src/app.js",
        },
    output: {
        filename: `[name].bundle.js`,
        path: path.join(__dirname, "wwwroot")
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.m?js$/,
    //       exclude: /(node_modules|bower_components)/,
    //       use: {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: ['@babel/preset-env'],
    //           plugins : ['@babel/plugin-proposal-class-properties']
    //         }
    //       }
    //     }
    //   ]
    // },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    devtool: "source-map",
};