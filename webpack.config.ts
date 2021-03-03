import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration ={
    mode: `development`,
    // エントリーポイント
    entry: "./src/index.ts",
    output: {
        filename: `bundle.js`,
        path: path.resolve(process.cwd()+ "/dist")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: "webpack.tsconfig.json"
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js', '.json',
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};

export default config;