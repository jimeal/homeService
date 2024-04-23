const path = require("path")
const webpack = require("webpack")
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const apiMocker = require("connect-api-mocker");
const pages = require("./src/template/pages");
const CopyPlugin = require("copy-webpack-plugin");
//const svgToMiniDataURI = require('mini-svg-data-uri');

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: {
    main: "./src/js/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        //loader: 'file-loader', 
        use: [
          'file-loader?name=assets/[name].[ext]?[hash]',
          'image-webpack-loader',
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       name: 'static/[name].[ext]?[hash]',
      //       generator: (content) => svgToMiniDataURI(content.toString()),
      //       fallback: 'file-loader',
      //       publicPath: './src/',
      //       limit: 20000,
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    ...pages.map((e) => {
      return new HtmlWebpackPlugin({
        template: `./src/template/${e.name}.html`,
        title: `${e.title} | 우리동네 홈서비스`,
        filename: `${e.name}.html`,
        minify: process.env.NODE_ENV === 'production' ? {
                  collapseWhitespace: true, // 빈칸 제거
                  removeComments: true, // 주석 제거
                } : false,
        favicon: "favicon.ico",
        hash: true,
        meta: [
                {
                    httpEquiv: 'X-UA-Compatible',
                    content: 'IE=edge'
                },
                {
                  name: 'viewport',
                  constent: '"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"'
                },
                { 
                    name: 'description',
                    content: 'description goes here'
                }
              ],
              link: [
                'https://webfontworld.github.io/score/SCoreDream.css',
                'https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css', 
                {
                  href: '/apple-touch-icon.png',
                  rel: 'apple-touch-icon',
                  sizes: '180x180'
                },
                {
                  href: '/favicon-32x32.png',
                  rel: 'icon',
                  sizes: '32x32',
                  type: 'image/png'
                }
              ]
      })
    }),
    new HtmlWebpackPlugin({
      template: `./src/template/index.html`,
      title: `우리동네 홈서비스`,
      filename: `index.html`,
      minify: process.env.NODE_ENV === 'production' ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
              } : false,
      favicon: "favicon.ico",
      hash: true,
      meta: [
              {
                  httpEquiv: 'X-UA-Compatible',
                  content: 'IE=edge'
              },
              {
                name: 'viewport',
                constent: '"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"'
              },
              { 
                  name: 'description',
                  content: 'description goes here'
              }
            ],
            links: [
              'https://webfontworld.github.io/score/SCoreDream.css',
              'https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css', 
              {
                href: '/apple-touch-icon.png',
                rel: 'apple-touch-icon',
                sizes: '180x180'
              },
              {
                href: '/favicon-32x32.png',
                rel: 'icon',
                sizes: '32x32',
                type: 'image/png'
              }
            ]
    }),
    new CopyPlugin([
      { from: 'src/static', to: 'assets' },
    ]),
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
        Author: ${childProcess.execSync('git config user.name')}
      `
    }),
    new webpack.DefinePlugin({
      TWO: 1+1,
      THREE: '1+2',
      'api.domain': JSON.stringify('http://dev.api.domain.com')
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({filename: `[name].css`})]
      : []),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    host: "localhost",
    overlay: true,
    //port: 8081,
    stats: "errors-only",
    //historyApiFallback: true
    before: app => {
      app.use(apiMocker('/api', 'mocks/api'));
    },
    hot: true,
    // proxy: {
    //   '/api': "http://localhost:8081"
    // },
  }
}