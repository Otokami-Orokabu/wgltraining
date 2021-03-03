import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration ={
    // 動作モード(とりあえず開発)
    mode: `development`,
    // エントリーポイントとなるプログラム
    entry: "./src/index.ts",
    output: {
        // javascriptをまとめたファイルのファイル名
        filename: `bundle.js`,
        // ファイルの出力先を指定
        path: path.resolve(process.cwd()+ "/dist")
    },
    module: {
        rules: [
            {
                // typescriptファイルを指定
                test: /\.ts$/,
                use: {
                    // typescriptファイルをトランスコンパイルする
                    loader: "ts-loader",
                    options: {
                        // コンパイル時はwebpack用のtsconfig.jsonを使う設定
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
        // index.htmlもwebpackで扱うプラグイン設定
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};

export default config;