const path 		= require("path")
const webpack 	= require("webpack")

module.exports = {
    cache: true,
    devtool: "eval", //or cheap-module-eval-source-map
    entry: {
        main: path.join(__dirname,"app","www","main.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.join(__dirname,"app"),
            manifest: require(path.join(__dirname,"dist","vendor-manifest.json"))
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                include: [
                    path.join(__dirname,"app") //important for performance!
                ],
                query: {
                    cacheDirectory: true, //important for performance
					plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy'],
					presets: ["react", "es2015", "stage-0"]
                }
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        root: path.resolve(__dirname, "app"),
        modulesDirectories: ["node_modules"]
    }
};
