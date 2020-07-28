const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log('isProd ', isProd);
console.log('isDev ', isDev);

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
};

const fileName = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hrm: isDev,
                reloadAll: true
            }
        },
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        }
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};

const babelOptions = (preset) => {
    const opts = {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    };

    if (preset) {
        opts.presets.push(preset);
    }

    return opts;
};

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
		main: [
		    '@babel/polyfill',
            './index.js'
        ]
    },
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/(node_modules|bower_components)/',
				use: {
                    loader: 'babel-loader',
                    options: babelOptions()
				}
            },
            {
                test: /\.ts$/,
                exclude: '/(node_modules|bower_components)/',
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/plugin-transform-typescript')
                }
            },
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ass$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use:['file-loader']
            },
            {
                test: /.(ttf|woff|woff2|eot)$/,
                use:['file-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        hot: isDev
    },
    devtool: isDev ? 'source-map' : '',
	plugins: [
		new HtmlWebpackPlugin({
			title: "Unsplash API Connect",
			template: path.resolve(__dirname, './public/index.html'),
			favicon: path.resolve(__dirname, './public/favicon.ico'),
            minify: {
			    collapseWhitespace: isProd
            }
		}),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public/robots.txt'),
                    to: path.resolve(__dirname, './build')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: fileName('css')
        })
	]
};


module.exports = config;