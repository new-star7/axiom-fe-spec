# `@new-star7/commitlint-config`

> axiom前端编码规范 Git 规范

支持配套的 [commitlint 配置](https://commitlint.js.org/#/concepts-shareable-config)，用于对 `git commit message` 进行校验。

## 安装

使用时，需要安装 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)：

```bash
npm install @new-star7/commitlint-config @commitlint/cli --save-dev
# 或者使用 pnpm
pnpm add @new-star7/commitlint-config @commitlint/cli -D
```

## 使用

在 `commitlint.config.js` 中集成本包:

```javascript
module.exports = {
	extends: ['@new-star7/commitlint-config'],
};
```

## 设置 git hook

可通过 [husky](https://www.npmjs.com/package/husky) 设置在 `git commit` 时触发 `commitlint`。

首先安装并初始化 husky (适用于 Husky 9+)：

```bash
npm install husky --save-dev
npx husky init
```

然后手动在`.husky/commit-msg`文件中写入以下拦截指令:

```bash
npx --no -- commitlint --edit "$1"
```

更多信息可参考 [commitlint 文档](https://commitlint.js.org/#/guides-local-setup?id=install-husky)。
