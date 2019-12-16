/*
 * @description: 不eject的情况下，使用customize-cra对webpack配置进行覆盖设置
 * @author: zpl
 * @Date: 2019-12-03 15:45:06
 * @LastEditTime: 2019-12-16 11:22:04
 * @LastEditors: zpl
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  overrideDevServer,
} = require('customize-cra');

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { '@primary-color': '#1DA57A' },
    }),
  ),
  devServer: overrideDevServer(
    // dev server plugin
  ),
};
