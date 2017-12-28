var webpack = require("webpack");
var path = require("path");
var webpackConfig = {
    entry: './src/index',
    output: {
        libraryTarget: "umd",
        path: path.resolve(__dirname, '../dist'),
        filename: 'alphabet.esm.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}

var compilerEsm = webpack(webpackConfig);
compilerEsm.run(function (err, stats) { });

webpackConfig.output = {
    ...webpackConfig.output,
    libraryTarget: "commonjs2",
    filename: "alphabet.common.js"
}
var compilerCommon = webpack(webpackConfig);
compilerCommon.run(function (err, stats) { });