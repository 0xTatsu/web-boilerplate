const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const xPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  // files
  mainEntry: xPath('src/index.js'),
  appHtml: xPath('public/index.html'),
  appFavicon: xPath('public/favicon.ico'),
  packageJSON: xPath('package.json'),
  yarnLockFile: xPath('yarn.lock'),

  publicPath: '',
  DLL_LIB_NAME: '[name]_dll',
  CSS_FILENAME_LOADER: 'assets/css/[name].[hash:8].css',
  IMG_FILENAME_LOADER: 'assets/images/[name].[hash:8].[ext]',
  FILENAME_LOADER: 'assets/files/[name].[hash:8].[ext]',
  appBundle: 'assets/js/app.[hash:8].js',
  chunkFilename: 'assets/js/[name].[hash:4].chunk.js',
  DLL_FILENAME: '[name].dll.js',
  DLL_MANIFEST_FILENAME: '[name]-manifest.json',
  HASH_FILE_PATH: xPath('node_modules/.bin/_vendor_hash'),

  // directories
  appRoot: xPath(''),
  appSrc: xPath('src'),
  appDist: xPath('dist'),
  appPublic: xPath('public'),

  WEBPACK_VENDOR_CONFIG: xPath('configs/webpack.vendor'),
  WEBPACK_CONFIG: xPath('configs/webpack.config'),
  DEV_SERVER_CONFIG: xPath('configs/webpackDevServer.config'),
};
