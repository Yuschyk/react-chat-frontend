const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const analyze = process.argv.includes('--analyze');
const isDev = process.env.NODE_ENV !== 'production';
const ROOT_DIR = fs.realpathSync(process.cwd());


function getName(ext) {
    return `[name].[${isDev ? 'hash:8' : 'contenthash'}].bundle.${ext}`
}

function getImageName(ext) {
    return `[name].[${isDev ? 'hash:8' : 'contenthash'}].${ext}`
}

function pathResolve(...args) {
    return path.resolve(ROOT_DIR, ...args);
}

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: {
        main:'./src/index.jsx'
    },
    output: {
        publicPath: '/',
        path: pathResolve('dist'),
        filename: getName('js')
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './styles/[name].css'
        }),

        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, __dirname, 'dist/public') }
                ]
            }
        ),
        new webpack.HashedModuleIdsPlugin()

    ].filter(Boolean),

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor:{
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    }
                }
            }
        }
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css']
    },

    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        open: 'chrome'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ],
            },

            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
            },

            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader'],
            },

            {
                test: /(\.jsx)|(\.js)$/,
                exclude: [/node-modules/],
                use: ['babel-loader']
            },

            {
                test: /\.(ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            },

            {
                test: /\.(png|jpg|svg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `assets/${getImageName('[ext]')}`,
                        }
                    }
                ]
            },
        ]
    }
};
