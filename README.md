# blog
个人博客

# 项目结构
|                                        文件                                   |                   说明
| :---------------------------------------------------------------------------- | :------------------------------------:
| root                                                                          | 根节点
| &nbsp;&nbsp;&nbsp;\|-- mock                                                   | 模拟数据
| &nbsp;&nbsp;&nbsp;\|-- public                                                 | 全局文件
| &nbsp;&nbsp;&nbsp;\|-- src                                                    | 
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- assets           | 静态文件文件夹
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- common           | 公共配置
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- components       | 通用组件
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- layouts          | 通用布局
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- routes           | 路由
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- services         | 后台接口服务
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- utils            | 工具库
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- views            | 页面内容
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- App.css          | 
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- App.js           | 主组件
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- App.test.js      | 
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- index.css        | 
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- index.js         | 应用入口
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- logo.svg         | 
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- router.js        | 主路由
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- serviceWorker.js | 
| &nbsp;&nbsp;&nbsp;\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|-- setupProxy.js    | 反向代理插件配置
| &nbsp;&nbsp;&nbsp;\|-- config-overrides.js                                    | 通过react-app-rewired实现覆盖默认配置

# 相关技术
该项目是通过[Create React App](https://github.com/facebook/create-react-app)引导的。

## 可用的脚本

在项目目录,您可以运行:

### `npm start`

在开发模式下运行应用程序。<br />
在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看。

如果进行编辑，页面将重新加载。<br />
并且可以在控制台查看lint错误。

### `npm test`

在交互式监视模式下启动测试运行程序。<br />
更多信息，请参考[运行测试](https://facebook.github.io/create-react-app/docs/running-tests)。

### `npm run build`

将要部署到生产环境的应用程序生成到 “build” 文件夹。<br />
它在生产模式下捆绑了React，并优化了构建以获得最佳性能。

更多信息，请参考[部署](https://facebook.github.io/create-react-app/docs/deployment)。

### `npm run eject`

**注意：这是单向操作。 一旦您 `eject`，将无法返回！**

如果您对构建工具和配置选择不满意， 您可以随时 `eject` 。 此命令将从项目中删除单个构建依赖项。

取而代之，将所有配置文件和传递依赖项（Webpack，Babel，ESLint等）直接复制到您的项目中，以便您完全控制它们。 除`eject`以外的所有命令仍然有效，但它们将指向复制的脚本，因此您可以对其进行调整。

并不是总是需要使用`eject`。 精选功能集适用于中小型部署，不必使用此功能。

## 学习更多

您可以在[创建React App文档](https://facebook.github.io/create-react-app/docs/getting-started)中了解更多信息。

要学习React，请查看[React文档](https://reactjs.org/)。

### 代码分割

本节已移至此处： https://facebook.github.io/create-react-app/docs/code-splitting

### 分析捆绑包大小

本节已移至此处： https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### 制作渐进式Web应用程序

本节已移至此处： https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### 进阶设定

本节已移至此处： https://facebook.github.io/create-react-app/docs/advanced-configuration

### 部署方式

本节已移至此处： https://facebook.github.io/create-react-app/docs/deployment

### `npm run build`无法缩小

本节已移至此处： https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
