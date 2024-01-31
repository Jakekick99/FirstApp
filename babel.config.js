module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'react-native-dotenv'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
