module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-url')({
      url: 'copy',
      assetsPath: 'static',
      // enabling useHash workarounds issue #121
      // from https://github.com/postcss/postcss-url/
      useHash: true,
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
    require('postcss-normalize')(),
  ]
}
