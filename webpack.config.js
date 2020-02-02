const path = require('path');
const wwwrootPath = path.resolve(__dirname, '../Vision.App.Web/wwwroot');
const outputPath = path.resolve(wwwrootPath, "./app");

console.log('Output directory: ', outputPath);

module.exports = {
    entry: ['./src/scripts/app.ts', './src/styles/master.scss'],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "babel-loader?presets[]=es2015",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/typescript"
                    ],
                    plugins: [

                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-proposal-private-methods"
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'app.css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    },
    output: {
        filename: 'app.js',
        path: outputPath,
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};