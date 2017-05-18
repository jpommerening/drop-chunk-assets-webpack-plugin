'use strict';

module.exports = class DropChunkAssetsPlugin {
  constructor(chunkName) {
    if (typeof chunkName === 'string') {
      this.filter = chunk => chunk.name === chunkName;
    }
    else if (typeof chunkName === 'function') {
      this.filter = chunkName;
    }
    else if (chunkName instanceof RegExp) {
      this.filter = chunk => chunkName.test(chunk.name);
    }
    else {
      this.filter = chunk => true;
    }
  }

  apply(compiler) {
    compiler.plugin('after-compile', (compilation, callback) => {
      compilation.chunks.filter(this.filter).forEach(chunk => {
        chunk.files.forEach(filename => {
          delete compilation.assets[ filename ];
        });
      });
      callback();
    });
  }
};
