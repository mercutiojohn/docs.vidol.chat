# LobeVidol 用户指南

## 文档贡献方式

1. 克隆仓库

```bash
git clone git@github.com:v-idol/docs.vidol.chat.git
```

2. 安装依赖

```bash
pnpm install
pnpm i -g mintlify
```

3. 启动文档

```bash
mintlify dev
```

4. 提交 PR

## 文档翻译

在 `docs` 目录下，每个 `.mdx` 文件都有一个对应的 `.zh-CN.mdx` 文件。

```bash
pnpm run i18n
```

## 文档 CDN 化

```bash
pnpm run cdn
```

> 需要在 .env 文件中配置 OSS 的密钥，可参考 `.env.example` 文件。

# 可参考

- [Lobehub](https://lobehub.com/zh/docs/usage/agents/concepts)
- [SillyTavern](https://docs.sillytavern.app/usage/core-concepts/worldinfo/)
