const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const projectRoot = __dirname;
const packageRoot = path.resolve(__dirname, '../..');

const config = {
  projectRoot,
  watchFolders: [packageRoot],
  resolver: {
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(packageRoot, 'node_modules'),
    ],
    extraNodeModules: {
      react: path.resolve(projectRoot, 'node_modules/react'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config)