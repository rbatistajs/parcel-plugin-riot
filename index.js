module.exports = function (bundler) {
  console.log("opafion")
  bundler.addAssetType('tag', require.resolve('./RiotAsset'));
};
