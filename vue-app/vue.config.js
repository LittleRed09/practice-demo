const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = {
    configureWebpack: smp.wrap({ plugins: [] }),
  };