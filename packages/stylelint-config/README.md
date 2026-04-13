# axiom-fe-stylelint-config

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install axiom-fe-stylelint-config stylelint stylelint-scss --save-dev
```

## 使用

在你的项目根目录下创建一个 `.stylelintrc.js` 文件，并引入本配置：

```json
{
  "extends": "axiom-fe-stylelint-config"
}
```
