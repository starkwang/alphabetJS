var path = require('path');
module.exports = {
    entry: './src/index',
    output: {
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'dist'),
        filename: 'alphabet.js'
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