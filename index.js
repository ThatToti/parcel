// Node 8 supports native async functions - no need to use compiled code!
module.exports = parseInt(process.versions.node) < 8
  ? require('./lib/Bundler')
  : require('./src/Bundler');
