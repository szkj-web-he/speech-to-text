
const webpack = require("webpack");

const isBuild = process.argv[process.argv.length - 1] === 'build';

module.exports = {
    plugins : [
        new webpack.DefinePlugin({
            "process.env": {
                BASENAME:isBuild ? "/speech-to-text" : '/',
            },
        }),],
        output :{
            publicPath: isBuild? "/speech-to-text" : "/",
          
        }
};