/*
*此文件是create-react-app 官方推荐的一个库 customize-cra的拓展文件
*拓展webpack的功能
*基于commonjs的规范
*/

const {
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra')

module.exports = override(fixBabelImports('import', {
  libraryName: 'antd',
  libraryDirectory: 'es',
  style: true
}),
// 这里设置less
//定制ant-design的主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#d214a2',
      "@font-size-base": '12px'
    }
  })
)