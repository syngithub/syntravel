path = require('path');

module.exports = {
    context: path.resolve(__dirname, './app/assets/js/'),

    entry: { app: './app.js',
        vendor: './vendor.js'},
    output: {
        path: path.resolve(__dirname, './app/temp/js'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015']
                    }
                  }
            }
        ]
    }
}