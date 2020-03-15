module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: "csv-loader",
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
      }
    });
    return config;
  },
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  assetPrefix: '/COVID-19-DE-Dashboard/'
};
