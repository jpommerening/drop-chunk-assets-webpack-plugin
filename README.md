# drop-chunk-assets-webpack-plugin

> Drop the generated bundle if all you're interested in is (for example) file-loader output

## Usage

Example:

```js
const DropChunkAssetsPlugin = require( 'drop-chunk-assets-webpack-plugin' );

module.exports = {
  entry: {
    main: 'file-loader!img-loader!./cat.jpeg'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new DropChunkAssetsPlugin('main')
  ]
};
```
