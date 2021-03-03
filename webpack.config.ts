import path from "path";
import webpack from "webpack";

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
};

export default config;