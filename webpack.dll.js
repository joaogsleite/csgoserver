const path 		= require("path")
const webpack 	= require("webpack")

module.exports = {
    entry: {
        vendor: [path.join(__dirname,"app","www","vendor","vendor.js")]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist","[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname, "app")
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        root: path.resolve(__dirname, "app"),
        modulesDirectories: ["node_modules"]
    }
}
