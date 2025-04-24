const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
// Diga ao Metro para usar o transformer de SVG
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
// Remova “svg” de assetExts e adicione em sourceExts
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
config.resolver.sourceExts.push("svg");

module.exports = config;
